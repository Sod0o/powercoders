/**
 * Represents an item in the shopping list;
 */
class ShoppingListItem {
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  toListItem() {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerText = this.name + '    ';
    li.appendChild(span);

    if (this.quantity !== '') {
      li.appendChild(document.createTextNode('  '));
      const qSpan = document.createElement('span');
      qSpan.innerText = '(' + this.quantity + ')';
      li.appendChild(qSpan);
    }

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

    return li;
  }
}

function redbox(inputBox) {
  if (inputBox.value === '') {
    inputBox.className = 'redbox';
  } else {
    inputBox.className = '';
  }
}

function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const button = document.querySelector('button');
  const ul = document.querySelector('ul');
  const clearListButton = document.querySelector('#clear');
  const quantity = document.getElementById('quantity');

  clearListButton.disabled = true;

  button.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === '') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantity.value.trim());

    ul.appendChild(item.toListItem());
    inputBox.value = '';      // This is called a statement. And a nested scope too.
    quantity.value = '';
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

    const item = new ShoppingListItem(trimmedValue, quantity.value.trim());

    ul.appendChild(item.toListItem());
    inputBox.value = '';
    quantity.value = '';
    button.disabled = true;
    clearListButton.disabled = false;
    redbox(inputBox);
    inputBox.focus();
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
