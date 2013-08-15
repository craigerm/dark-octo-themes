function onChangeTheme() {
  var theme = this.name;
  ThemeStorage.save(theme);
  highlightSelectedTheme(theme);
}

function highlightSelectedTheme(theme) {
  themes = document.querySelectorAll('a > .selected');
  for(var i=0; i < themes.length; i++) {
    themes[i].style.display = 'none';
  }
  selectedItem = document.querySelector('a[name=' + theme + '] .selected');
  selectedItem.style.display = 'block';
}

function initForm() {
  var currentTheme = ThemeStorage.getCurrent();
  highlightSelectedTheme(currentTheme);
  elements = document.querySelectorAll('.theme-preview > a');

  for(var i=0; i < elements.length; i++) {
    elements[i].addEventListener('click', onChangeTheme);
  }
}

initForm();
