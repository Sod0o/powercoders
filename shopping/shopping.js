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

document.addEventListener('DOMContentLoaded', function (event) {                      // *This is a big scope
  let inputBox = document.getElementById('item');
  inputBox.focus();
  document.querySelector('button').addEventListener('click', function (event) {
    document.querySelector('ul').appendChild(createNewListItem(inputBox.value));
    inputBox.value = '';
    inputBox.focus();                     // This is called a statement. And a nested scope too.

  });

  document.querySelector('input').addEventListener('keyup',function (event) {
    if (inputBox.value !== '') {
      if (event.key === 'Enter') {
        document.querySelector('ul').appendChild(createNewListItem(inputBox.value));
        inputBox.value = '';
      }
    }
  });
}); // Till here*
