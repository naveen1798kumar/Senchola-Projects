let input = document.getElementById('input');
let button = document.getElementById('add');
let addItem = document.getElementById('addItem');

let todos = [];

button.addEventListener('click', ()=>{
    todos.push(input.value)
    console.log(todos.reverse());
    addtodo(input.value)
    input.value=''
})
function addtodo(todo){
    let para = document.createElement('li')
    para.innerText = todo;
    addItem.appendChild(para); 
    para.addEventListener('click', ()=>{
        para.style.textDecoration = 'line-through'
        para.style.color = 'red'
        remove(todo)
    })
    para.addEventListener('dblclick', ()=>{
        addItem.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index>-1)
    todos.splice(index, 1)
}