"use client";

declare global {
  interface Window {
    gtag: (
      command: "event",
      action: string,
      parameters: Record<string, unknown>
    ) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    parameters: Record<string, unknown> = {}
  ) => {
    console.log("Analytics: Attempting to track event:", action, parameters);

    // Wait for GA to be available with retry logic
    const sendEvent = (retryCount = 0) => {
      if (typeof window !== "undefined" && window.gtag) {
        console.log("Analytics: GA is available, sending event");
        window.gtag("event", action, parameters);
        console.log("Analytics: Event sent successfully");
      } else if (retryCount < 10) {
        console.log(
          `Analytics: GA not available, retrying in 200ms (attempt ${retryCount + 1})`
        );
        setTimeout(() => sendEvent(retryCount + 1), 200);
      } else {
        console.log("Analytics: GA failed to load after 10 attempts");
      }
    };

    sendEvent();
  };

  const trackPasswordGeneration = (type: "random" | "memorable") => {
    console.log("Analytics: Tracking password generation:", type);
    trackEvent("generate_password", {
      password_type: type,
      event_category: "password_generator",
    });
  };

  const trackPasswordCopy = (type: "random" | "memorable") => {
    console.log("Analytics: Tracking password copy:", type);
    trackEvent("copy_password", {
      password_type: type,
      event_category: "password_generator",
      event_label: "password_copied",
    });
  };

  const trackPasswordStrength = (strength: string) => {
    console.log("Analytics: Tracking password strength:", strength);
    trackEvent("analyze_password_strength", {
      strength_level: strength,
      event_category: "password_generator",
    });
  };

  return {
    trackEvent,
    trackPasswordGeneration,
    trackPasswordCopy,
    trackPasswordStrength,
  };
};
