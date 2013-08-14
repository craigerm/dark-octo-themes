function onClickSave() {
  var theme = document.getElementById('theme').value;
  setStatus('Theme changed to ' + theme);
  ThemeStorage.save(theme);
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
  status.style.display = 'block';
  setTimeout(function() {
    status.innerHTML = "";
    status.style.display = 'none';
  }, 2000);
}

function initForm() {
  console.log('Loading current theme %s', ThemeStorage.getCurrent());
  document.getElementById('theme').value = ThemeStorage.getCurrent();
  document.querySelector('#save').addEventListener('click', onClickSave);
}

//function setSchemeEditor(scheme) {
//  var css = document.getElementById("css");
//  css.value = scheme;
//}


initForm();

//var css = document.getElementById("css");
//setSchemeEditor(currentScheme());
