function saveButton() {
  saveScheme(document.getElementById("css").value);
  
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
}

function setSchemeEditor(scheme) {
	var css = document.getElementById("css");
	css.value = scheme;
}


document.querySelector('#save').addEventListener('click', saveButton);

var css = document.getElementById("css");
setSchemeEditor(currentScheme());
