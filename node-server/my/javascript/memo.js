let inputBox = document.getElementById('inputField');  
let ToDoEvent = document.getElementById('ToDoEvent');      
let toDoList = document.getElementById('toDoList');   

ToDoEvent.addEventListener('click', function(){    
    var list = document.createElement('li');     
    if (!inputBox.value)            
        alert('내용을 입력하세요.');
    else
    {
        list.innerText = inputBox.value;  
        toDoList.appendChild(list);       
        inputBox.value= "";              
    }

    list.addEventListener('click', function(){      
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('doubleClick', function(){  
        toDoList.removeChild(list);
    })
})