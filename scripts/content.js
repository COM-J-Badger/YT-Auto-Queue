// content.js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getQueueUrls() {
  queueItems = document.querySelectorAll("a#wc-endpoint"); 
  urls = [];

  queueItems.forEach(item => {
    const videoUrl = item.href; // Full YouTube video link
    if (videoUrl && videoUrl.includes("watch?v="))  urls.push(videoUrl);

  });

  return urls  
}

// Example: Listen for a keyboard shortcut (Ctrl+Shift+Q) to save queue
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.code === "KeyQ") {
    const urls = getQueueUrls();
    chrome.runtime.sendMessage({ action: "saveQueue", urls });
    alert(`Saved ${urls.length} videos from queue!`);
  }
});

//\sleep(5000).then(getQueueUrls())