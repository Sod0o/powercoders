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
  const ul = document.querySelector('ul');
  const trimmedValue = inputBox.value.trim();

  button.addEventListener('click', function (event) {
    if (trimmedValue === '') {
      return;
    }

    ul.appendChild(createNewListItem(trimmedValue));
      inputBox.value = '';      // This is called a statement. And a nested scope too.
    button.disabled = true;
    inputBox.focus();
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    button.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
        return;
    }

    ul.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    button.disabled = true;
  });

  inputBox.focus();
}); // Till here*


function elseTest(num) {
  if (typeof (num) === 'number') {
    if (num > 10) {
      console.log('bigger than 10');
    } else if (num === 10) {
      console.log('exactly 10');
    } else {
      console.log('less than 10');
    }
  }
}
