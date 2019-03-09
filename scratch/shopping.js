function createNewListItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';       // You can write button.textContent = 'Delete';
  li.appendChild(deleteButton);

  // Add a click handler that logs the click here
  deleteButton.addEventListener('click', function (event) {
    li.remove();
    console.log('Delete button clicked: ' + itemName);

  });

  document.querySelector('ul').appendChild(li);

  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let textBox = document.getElementById('item');
    // textBox is an imaginary box inside the input element (the real box) that has the id item.
    // so we make a big real BOX with let to put our texts (values) inside the textbox.
    // Or ...
    // ( textbox is an imaginay box that will contain our text )

    console.log(textBox.value);
    // Show me the text - inside/attached with the imaginary box (textbox), and log/show it in console.

    // Call createNewListItem with the contents of the input widget and save
    // the result in a variable.
    let li = createNewListItem(textBox.value);
    // Make another imaginary box so when insert the value inside the imaginary textbox, it will make it/call
    // the function createNewListItem. Means, it will show the texts inside a span and beside a delete button.

    // Use document.querySelector to find the ul element and save the result
    // in a variable.
    let ul = document.querySelector('ul');

    // Append the li element returned by createNewListItem to the ul element
    // returned by document.querySelector.
    ul.appendChild(li);


    //or...
    //Chaining
    //document.addEventListener('DOMContentLoaded', function(event) {
    // document.querySelector('button').addEventListener('click', function(event) {
    // document.querySelector('ul').appendChild(
    // createNewListItem(document.getElementById('item').value));
    //});
    //});
  });
});
