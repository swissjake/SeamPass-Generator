import { analytics } from "./analytics";

declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: any) => void;
  }
}

window.gtag = (command: string, action: string, parameters: any) => {
  console.log("🔗 gtag called:", command, action, parameters);

  if (command === "event") {
    switch (action) {
      case "generate_password":
        analytics.trackPasswordGeneration(
          parameters.password_type || "random",
          parameters
        );
        break;
      case "copy_password":
        analytics.trackPasswordCopy(parameters.password_type || "random");
        break;
      default:
        analytics.sendEvent(action, parameters);
    }
  }
};

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import "@seampass/tailwind-config/styles";
import { RandomPassword, MemorablePassword, PasswordTabs } from "@seampass/ui";

function Popup() {
  const [activeTab, setActiveTab] = useState("random");

  useEffect(() => {
    analytics.trackPopupOpen();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    analytics.trackTabChange(tab);
  };

  return (
    <div className="w-full h-full p-4 bg-white overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        SeamPass Password Generator
      </h1>

      {/* Tab Navigation - Full Width */}
      <div className="my-3 max-w-[600px] mx-auto p-1 w-full">
        <PasswordTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Content */}
      <div className="space-y-4 w-full">
        {activeTab === "random" && (
          <div className="w-full">
            <RandomPassword />
          </div>
        )}
        {activeTab === "memorable" && (
          <div className="w-full">
            <MemorablePassword />
          </div>
        )}
      </div>
    </div>
  );
}

// Render the popup
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Popup />);
