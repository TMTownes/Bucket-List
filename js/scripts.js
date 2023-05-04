//div class="container"
//form name="toDoList" 
//input type="text" name="ListItem" id="input" 
//div onclick="newItem()" id="button"
//ol id="list"



//add new item to list
function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = li.append(inputValue);

    if(inputValue === ''){
        alert('You must write something');
    } else {
        let list= $('#list');
        list.append(text);
    }
}

