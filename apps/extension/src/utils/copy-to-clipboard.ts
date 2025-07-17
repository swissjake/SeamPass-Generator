const copyToClipboard = async (
  text: string,
  callback?: (success: boolean) => void
) => {
  try {
    // Use the Chrome extension clipboard API
    await navigator.clipboard.writeText(text);

    console.log("Password copied to clipboard!");
    callback?.(true);
  } catch (error) {
    console.error("Failed to copy password:", error);

    // Fallback method for older browsers
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      console.log("Password copied to clipboard (fallback method)!");
      callback?.(true);
    } catch (fallbackError) {
      console.error("Fallback copy failed:", fallbackError);
      callback?.(false);
    }
  }
};

export default copyToClipboard;
