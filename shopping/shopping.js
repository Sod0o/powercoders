function createNewListItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    let inputBox = document.getElementById('item');
    inputBox.focus();
  });

  document.querySelector('ul').appendChild(li);

  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {             // *This is a big scope
  let inputBox = document.getElementById('item');
  let button = document.querySelector('button');
  inputBox.focus();
  button.disabled = true;

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.trim() !== '') {
      document.querySelector('ul').appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';      // This is called a statement. And a nested scope too.
    }
    inputBox.focus();
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if (inputBox.value !== '') {
      button.disabled = false;
    }
    if (inputBox.trim() !== '') {
      if (event.key === 'Enter') {
        document.querySelector('ul').appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
  });

  inputBox.value = '';
}); // Till here*
