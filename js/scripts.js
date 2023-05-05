//div class="container"
//form name="toDoList" 
//input type="text" name="ListItem" id="input" 
//div onclick="newItem()" id="button"
//ol id="list"




//add new item to list
function newItem(){
    let li = $('<li> </li>');
    let inputValue = $('#input').val();
    let text = li.append(inputValue);

    if(inputValue === ''){
        alert('You must write something');
    } else {
        let list= $('#list');
        list.append(text);
    }

    //crossout item from list
    function crossOut(){
        li.addClass("strike");
    }  
    li.on("dblclick", crossOut);


    //add delete button "X"
    let crossOutButton = $('<button class="crossOutButton">X</button>');
    li.append(crossOutButton);

    //delete item function
    function deleteItem(){
        li.addClass("delete");
    }

    crossOutButton.on("click", deleteItem);

    //reordering item
    $('#list').sortable();

}



