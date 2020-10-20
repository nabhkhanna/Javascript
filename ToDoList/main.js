let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() { // add the function to the button
    var paragraph = document.createElement('p'); // create a paraghraph
    paragraph.classList.add('paragraph-styling'); // add the styling
    paragraph.innerText = inputField.value; // add the text from input field
    toDoContainer.appendChild(paragraph); // append to todocontainer

    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})