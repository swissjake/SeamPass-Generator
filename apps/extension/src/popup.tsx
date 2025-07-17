import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import "@seampass/tailwind-config/styles";
import { RandomPassword, MemorablePassword } from "@seampass/ui";

// Simple popup component for the extension
function Popup() {
  const [activeTab, setActiveTab] = useState<"random" | "memorable">("random");

  return (
    <div className="w-full h-full p-4 bg-white overflow-y-auto">
      <h1 className="text-xl font-bold mb-4 text-center">
        SeamPass Password Generator
      </h1>

      {/* Tab Navigation - Full Width */}
      <div className="flex mb-4 bg-gray-100 rounded-lg p-1 w-full">
        <button
          onClick={() => setActiveTab("random")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeTab === "random"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Random
        </button>
        <button
          onClick={() => setActiveTab("memorable")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeTab === "memorable"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Memorable
        </button>
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
