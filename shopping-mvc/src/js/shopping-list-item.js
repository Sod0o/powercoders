/**
 * Represents an item in the shopping list.
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
