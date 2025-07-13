export const copyToClipboard = async (
  text: string,
  callback?: (success: boolean) => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    callback?.(true);
  } catch (error) {
    console.error("Failed to copy password:", error);

    // Fallback method
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      callback?.(true);
    } catch (fallbackError) {
      console.error("Fallback copy failed:", fallbackError);
      callback?.(false);
    }
  }
};
