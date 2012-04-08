// For now we have just the one theme
var theme = "themes/vibrantink.css";
var isEnabled = false;

function eval(script){
  chrome.tabs.executeScript(null,{ code: script });
}

function includeTheme(tab){
  if(isEnabled && tab.url.match(/https:\/\/github.com/)){
    chrome.tabs.insertCSS(tab.id, {file: theme});
  }
}

chrome.browserAction.onClicked.addListener(function(tab){
  isEnabled = !isEnabled;
  includeTheme(tab);
});

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab){
  if(changeInfo.url || changeInfo.status === "loading"){
    includeTheme(tab);
  }
});

chrome.tabs.onCreated.addListener(function(tab){
  includeTheme(tab);
});

