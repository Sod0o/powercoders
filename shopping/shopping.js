/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string}itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const ul = document.querySelector('ul');
  span.innerText = itemName + '    ';
  li.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="far fa-trash-alt fa-lg"></i>';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function (event) {
    li.remove();
    const inputBox = document.getElementById('item');
    inputBox.focus();

    document.querySelector('#clear').disabled =
        document.querySelectorAll('li').length === 0;
  });

  ul.appendChild(li);

  return li;
}

function redbox(inputBox) {
   if (inputBox.value === ''){
    inputBox.className = 'redbox';
  } else {
    inputBox.className = '';
  }
}

function domContentLoaded(){
  const inputBox = document.getElementById('item');
  const button = document.querySelector('button');
  const ul = document.querySelector('ul');
  const clearListButton = document.querySelector('#clear');

  clearListButton.disabled = true;

  button.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === '') {
      return;
    }

    ul.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';      // This is called a statement. And a nested scope too.
    button.disabled = true;
    clearListButton.disabled = false;
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
    clearListButton.disabled = false;
    redbox(inputBox);
  });

  clearListButton.addEventListener('click', function (event) {
    const ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
    clearListButton.disabled = true;
    inputBox.focus();
  });

  inputBox.focus();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {        // *This is a big scope
    domContentLoaded();
  });
} else {
  domContentLoaded();
}