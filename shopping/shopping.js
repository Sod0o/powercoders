function createNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    const inputBox = document.getElementById('item');
    inputBox.focus();
  });

  document.querySelector('ul').appendChild(li);

  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {        // *This is a big scope
  const inputBox = document.getElementById('item');
  const button = document.querySelector('button');
  inputBox.focus();

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.trim() !== '') {
      document.querySelector('ul').appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';      // This is called a statement. And a nested scope too.
    }
    inputBox.focus();
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue !== '') {
      button.disabled = false;
      if (event.key === 'Enter') {
        document.querySelector('ul').appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
      }
    }

    button.disabled = inputBox.value.trim() === '';
  });

  inputBox.focus();
}); // Till here*


function elseTest(num) {
  if (num < 10) {
    console.log('less than 10');
  } else if (num > 10) {
    console.log('bigger than 10')
  } else if (num === 10) {
    console.log('exactly 10')
  }
}