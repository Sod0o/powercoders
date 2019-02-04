function redbox(inputBox) {
  if (inputBox.value === '') {
    inputBox.className = 'redbox';
  } else {
    inputBox.className = '';
  }
}

function domContentLoaded() {
  new Controller();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {        // *This is a big scope
    domContentLoaded();
  });
} else {
  domContentLoaded();
}