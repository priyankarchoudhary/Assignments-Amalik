console.log("In script file Loading");
const RESPONSE_DONE =4;
const STATUS_OK = 200;
const TODOS_LIST_ID = "todos_list_div";


function add_todo_elements(id, todos_data_json)
{
    var parent = document.getElementById(id);
    parent.innerText = todos_data_json;

    //console.log(parent);

}
function getTodosAJAX()
{
    //console.log("some functioning is to be defined yet")
    // xhr - js object for making request to server via js
    var xhr = new XMLHttpRequest()
    xhr.open("GET","/api/todos",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == RESPONSE_DONE)
        {
            if (xhr.status == STATUS_OK) {
                console.log(xhr.responseText);
                add_todo_elements(TODOS_LIST_ID,xhr.responseText)
            }
        }
    }// end of callback
    xhr.send(data=null);// we are making request here
}