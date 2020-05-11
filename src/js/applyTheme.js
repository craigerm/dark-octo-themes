function includeTheme(tab) {
  addThemeToTab(tab, ThemeStorage.getCurrent());
}

function addThemeToTab(tab, themeName) {
  chrome.tabs.insertCSS(tab.id, { file: "src/themes/" + themeName + ".css" });
}

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  if (tab.url && changeInfo.status === "loading") {
    addThemeToTab(tab, ThemeStorage.getCurrent());
  }
});

chrome.tabs.onCreated.addListener(function (tab) {
  includeTheme(tab);
});
