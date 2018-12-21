console.log('my code is working!');

function addnewpara(text) {
    let elP = document.createElement('p');
    let pContent = document.createTextNode(text);  // if i use text in here, i can use it many times with new contents
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('click-me').addEventListener('click', function(event) {
        addnewpara('Congratulations! You just created a new paragraph. :D');
    });
});

function lists() {
    // DONE: Create the list
    let elUl = document.createElement('ul');

    // DONE: Create and append first item
    let li1 = document.createElement('li');
    let li1Content = document.createTextNode('bubbla');
    li1.appendChild(li1Content);
    elUl.appendChild(li1);

    // TODO: Create and append second item
    let li2 = document.createElement('li');
    let li2Content = document.createTextNode('bubbla ');
    li2.appendChild(li2Content);
    elUl.appendChild(li2);

    let li3 = document.createElement('em');
    let li3Content = document.createTextNode('bubblie');
    li3.appendChild(li3Content);
    li2.appendChild(li3);

    // TODO: Create and append third item
    let li4 = document.createElement('li');
    let li4Content = document.createTextNode('bubbla bubblie boo');
    li4.appendChild(li4Content);
    elUl.appendChild(li4);

    // DONE: Append the list to the body
    let elBody = document.getElementById('body');
    elBody.appendChild(elUl);
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('magic').addEventListener('click', function (event) {
        lists();
    });
});
