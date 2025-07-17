/// <reference types="chrome" />

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillPassword") {
    // Find password fields and fill them
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach((field) => {
      (field as HTMLInputElement).value = request.password;
    });
    sendResponse({ success: true });
  }
});
