// For now we have just the one theme
var theme = "themes/vibrantink.css";

function includeTheme(tab){
  if(tab.url.match(/https:\/\/(gist.)?github.com/)){  
    chrome.tabs.insertCSS(tab.id, {file: theme});
  }
}

chrome.browserAction.onClicked.addListener(function(tab){
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

