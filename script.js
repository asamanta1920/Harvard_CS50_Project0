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
  for (let number = 0; number<list.length; number++) {
    if (list[number].checked) {
      checkedCountSpan++;
      itemCountSpan.value++;
    } else {
      uncheckedCountSpan.value++;
      itemCountSpan.value++;
    }
  }
  console.log(checkedCountSpan, itemCountSpan, uncheckedCountSpan)
}

function newTodo() {

  let check_value = prompt("What is the name of the activity you need to do?");
  checkbox=document.createElement("input");
  checkbox.value=(check_value + '</br>');
  checkbox.type="checkbox";
  p =document.createElement("h3");
  p.innerHTML = check_value + " ";
  br =document.createElement("br");
  list.appendChild(p);
  list.appendChild(checkbox);
  list.appendChild(br);
}
