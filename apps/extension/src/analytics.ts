const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GA_API_SECRET = import.meta.env.VITE_GA_API_SECRET;

console.log("GA_MEASUREMENT_ID:", GA_MEASUREMENT_ID);
console.log("GA_API_SECRET:", GA_API_SECRET ? "✓ Present" : "✗ Missing");

console.log(
  "chrome.runtime.getManifest().version:",
  chrome.runtime.getManifest().version
);

class ExtensionAnalytics {
  private clientId: string = "";

  constructor() {
    this.initClientId();
  }

  private async initClientId() {
    try {
      const result = await chrome.storage.local.get(["clientId"]);
      if (result.clientId) {
        this.clientId = result.clientId;
      } else {
        this.clientId = this.generateClientId();
        await chrome.storage.local.set({ clientId: this.clientId });
      }
    } catch (error) {
      this.clientId = this.generateClientId();
    }
  }

  private generateClientId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  async sendEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (!GA_MEASUREMENT_ID || !GA_API_SECRET) {
      console.log("Analytics disabled - missing credentials");
      return;
    }

    // Wait for clientId to be initialized
    if (!this.clientId) {
      await this.initClientId();
    }

    try {
      const payload = {
        client_id: this.clientId,
        events: [
          {
            name: eventName,
            params: {
              ...parameters,
              extension_version: chrome.runtime.getManifest().version,
            },
          },
        ],
      };

      const response = await fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Analytics event sent:", eventName, parameters);
      } else {
        console.error(
          "Analytics failed:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Analytics error:", error);
    }
  }

  // Track password generation
  async trackPasswordGeneration(type: "random" | "memorable", options?: any) {
    await this.sendEvent("generate_password", {
      password_type: type,
      ...options,
    });
  }

  // Track password copy
  async trackPasswordCopy(type: "random" | "memorable") {
    await this.sendEvent("copy_password", {
      password_type: type,
    });
  }

  // Track extension popup open
  async trackPopupOpen() {
    await this.sendEvent("popup_open");
  }

  // Track tab change
  async trackTabChange(tab: string) {
    await this.sendEvent("tab_change", {
      tab_name: tab,
    });
  }
}

// Export singleton instance
export const analytics = new ExtensionAnalytics();
