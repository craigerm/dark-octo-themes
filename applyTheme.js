// For now we have just the one theme
var theme = "themes/vibrantink.css";

function includeTheme(){
  chrome.tabs.insertCSS(null, {file: theme});
}

chrome.browserAction.onClicked.addListener(includeTheme);

