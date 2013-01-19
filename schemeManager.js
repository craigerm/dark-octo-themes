function loadDefaultScheme() {
  var xhr = new XMLHttpRequest();
  try {
	xhr.onreadystatechange = function(){
	  if (xhr.readyState != 4)
		return;

	  if (xhr.responseText) {
		saveScheme(xhr.responseText);
		return xhr.responseText;
	  }
	}

	xhr.onerror = function(error) {
	  console.debug(error);
	}

	xhr.open("GET", "themes/vibrantink.css", true);
	xhr.send(null);
  } catch(e) {
	console.error(e);
  }
}

function currentScheme() {
  var scheme = localStorage['colorScheme'];
  if (scheme == undefined) {
	return loadDefaultScheme();
  } else {
	return scheme;
  }
}

function saveScheme(newScheme) {
  localStorage['colorScheme'] = newScheme;
}