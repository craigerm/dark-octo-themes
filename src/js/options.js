// Add some convenience aliases
var forEach = Array.prototype.forEach;
var $ = document.querySelectorAll.bind(document);

function onChangeTheme() {
  var theme = this.name;
  ThemeStorage.save(theme);
  highlightSelectedTheme(theme);
}

function highlightSelectedTheme(theme) {
  var themes = $('a > .selected');
  forEach.call(themes, function(theme) {
    theme.style.display = 'none';
  });
  selectedItem = $('a[name=' + theme + '] .selected')[0];
  selectedItem.style.display = 'block';
}

function onMouseOverPreview() {
  this.querySelector('span').style.display = 'block';
}

function onMouseOutPreview() {
  this.querySelector('span').style.display = 'none';
}

function initForm() {

  var currentTheme = ThemeStorage.getCurrent();
  highlightSelectedTheme(currentTheme);

  forEach.call($('.theme-preview > a'), function(element) {
    element.addEventListener('click', onChangeTheme);
    element.addEventListener('mouseover', onMouseOverPreview);
    element.addEventListener('mouseout', onMouseOutPreview);
  });
}

initForm();
