const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list');
let itemCountSpan = document.getElementById('item-count');
let uncheckedCountSpan = document.getElementById('unchecked-count');
let checkedCountSpan = 0;

function addNumber() {

  for (var number = 0; number<list.length; number++) {
    if (list[number].checked) {
      checkedCountSpan++;
      itemCountSpan.innerHTML = parseInt(itemCountSpan,10) + 1;
    } else {
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan,10) + 1;
      itemCountSpan.innerHTML = parseInt(itemCountSpan,10) + 1;
    }
  }

  console.log(checkedCountSpan, itemCountSpan, uncheckedCountSpan)
}

function newTodo() {

  let check_value = prompt("What is the name of the activity you need to do?");
  checkbox=document.createElement("input");
  checkbox.value=(check_value);
  checkbox.type="checkbox";
  h =document.createElement("h3");
  h.innerHTML = check_value + " ";
  br =document.createElement("br");
  list.appendChild(h);
  list.appendChild(checkbox);
  list.appendChild(br);
}
