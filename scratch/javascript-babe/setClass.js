console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}

function setClass(className) {
  let el = document.getElementById('mypara');
  el.className = className;
}

document.addEventListener('DOMContentLoaded', function(event) {
  let makeWarning = document.getElementById('make-warning');
  makeWarning.addEventListener('click', function(event) {
   setClass(event, 'warning');
  });

  document.getElementById('make-tip').addEventListener('click', function(event) {
    setClass('tip');
});

  document.getElementById('make-normal').addEventListener('click', function(event) {
    setClass('');
  });
});
