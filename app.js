// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const submitBtn = document.querySelector('.submit-btn');
const form  = document.querySelector('.grocery-form');
const todolist  = document.querySelector('#grocery');
const container  = document.querySelector('.grocery-container');
const list  = document.querySelector('.grocery-list');
const clearBtn  = document.querySelector('.clear-btn');

// edit option
let editFlag = false;
let editId;


// ****** EVENT LISTENERS **********
const submit = submitBtn.addEventListener('click', addItem)
const clearAllTask = clearBtn.addEventListener('click', clearTasks);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = todolist.value;
    let id = Math.round(Math.random()*10000000);

    if(value && editFlag === false){
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const atrr = document.createAttribute('data-id');
        atrr.value = id;
        element.setAttributeNode(atrr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`
        // Delete & Edit Button
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteTask);
        editBtn.addEventListener('click', editTask);  
    // Append Child      
    list.appendChild(element);
    //show container
    container.classList.add('show-container');
    alertDisplay("Task Added", 'success');
    setLocalStorage(id, value);
    setBackToDefault();
    

    }else if(value && editFlag){

    }else{
        alertDisplay('Please add any Task', 'danger');
    };
}

// Alert Display
function alertDisplay(text, action){ 
        alert.textContent = text;
        alert.classList.add(`alert-${action}`);
        setTimeout(function(){
            alert.textContent = null;
            alert.classList.remove(`alert-${action}`);
        }, 1000);
}

// Set Defaults
function setBackToDefault() {
    todolist.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

// Clear Tasks
function clearTasks() {
    const tasks = document.querySelectorAll('.grocery-item');
    tasks.forEach(function(task) {
        list.removeChild(task);
    });
    container.classList.remove('show-container');
    setBackToDefault();
    alertDisplay('Cleared All Task', 'danger');
}

// Delete Tasks
function deleteTask(e) {
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    alertDisplay("Task Deleted", 'danger');
    setBackToDefault(); 
}

// Edit Task
function editTask() {

}

// ****** LOCAL STORAGE **********
function setLocalStorage(id, value) {
    console.log("setting local storage");
}

// ****** SETUP ITEMS **********
