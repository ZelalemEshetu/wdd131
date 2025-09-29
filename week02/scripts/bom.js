// Select elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event for "Add Chapter" button
button.addEventListener('click', function() {
  // Step 1: Check if input is empty
  const chapter = input.value.trim();
  if (!chapter) {
    alert("Please enter a chapter first!");
    input.focus(); // put cursor back
    return; // stop here
  }

  // Step 2: Create a list item for the chapter
  const li = document.createElement('li');
  li.textContent = chapter;
  li.style.fontWeight = "bold"; // optional: make chapter bold

  // Step 3: Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "❌";
  deleteButton.style.marginLeft = "10px";

  // Step 4: Add delete functionality
  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
  });

  // Step 5: Attach delete button to li, then li to ul
  li.appendChild(deleteButton);
  list.appendChild(li);

  // Step 6: Clear input and refocus
  input.value = "";
  input.focus();
});

