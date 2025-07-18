import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import "@seampass/tailwind-config/styles";
import { RandomPassword, MemorablePassword, PasswordTabs } from "@seampass/ui";

function Popup() {
  const [activeTab, setActiveTab] = useState("random");

  return (
    <div className="w-full h-full p-4 bg-white overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        SeamPass Password Generator
      </h1>

      {/* Tab Navigation - Full Width */}
      <div className="my-3 max-w-[600px] mx-auto  p-1 w-full">
        <PasswordTabs activeTab={activeTab} onTabChange={setActiveTab} />
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
