console.log('call');
function includeTheme(tab){
  if(tab.url.match(/https:\/\/(gist.)?github.com/)){  
    var scheme = currentScheme();
    console.log(scheme);
    chrome.tabs.insertCSS(tab.id, {code: scheme});
  }
}

function saveChanges() {
  // Get a value saved in a form.
  var theValue = textarea.value;
  // Check that there's some code there.
  if (!theValue) {
    message('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'value': theValue}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
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

