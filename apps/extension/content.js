window.addEventListener("message", (event) => {
  if (event.source !== window) {
    return;
  }
  if (event.data.token) {
    chrome.runtime.sendMessage({ type: "JWT_RECEIVED", token: event.data.token });
  }
});