const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________'); //you need to fill in the blank to reference thr html elementthat is unordere list element.

const li = document.createElement('Li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent= 'x';

li.append(deleteButton);
list.append(li);