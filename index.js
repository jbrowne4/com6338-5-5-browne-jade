
var toDoForm = document.getElementById('add-todo'); 
var todoList = document.getElementById('todo-list');
var todoConst = []

toDoForm.onsubmit = function(e) {
    e.preventDefault()  
    
    var taskInput = document.querySelector('#add-todo input'); 
    var task = taskInput.value.trim();               
    todoConst.push(task);                      
   
    if (task === '') { //no blanks added   
        return;
    }

    var li = document.createElement("li"); //add as list item          
    var button = document.createElement("button");
    var taskText = document.createTextNode(task); 

    todoList.appendChild(li);
    li.appendChild(button);
    button.appendChild(taskText);

    var mouseClickCount = 0; //use clicks for actions
    button.addEventListener('click', function() { //add event listener 
        mouseClickCount++;

      if (mouseClickCount === 1) { //one click = strikethrough   
        button.style.textDecoration = 'line-through';
      
    } else if (mouseClickCount === 2) {  //two clicks will remove item   
            var index =  todoConst.indexOf(task);   
            if (index !== -1) {         
            todoConst.splice(index,1);    }                               
        
            li.remove();                                           
      }
    });
   
    taskInput.value = '' //reset list
}