// Background script for extension functionality
chrome.runtime.onInstalled.addListener(() => {
  console.log("SeamPass extension installed");
});

// Context menu for quick password generation
chrome.contextMenus.create({
  id: "generatePassword",
  title: "Generate Password with SeamPass",
  contexts: ["editable"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generatePassword") {
    // Open popup or generate password directly
    chrome.action.openPopup();
  }
});
