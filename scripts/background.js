// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "saveQueue") {
    const blob = new Blob([message.urls.join("\n")], { type: "text/plain" });
    const reader = new FileReader();

    reader.onloadend = function () {
      chrome.downloads.download({
        url: reader.result,
        filename: "youtube-queue.txt",
        saveAs: true
      });
    };

    reader.readAsDataURL(blob);
  }
});