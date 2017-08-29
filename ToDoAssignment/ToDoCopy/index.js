var express = require("express");
var todo_db = require("./seed.js");
var bodyparser = require("body-parser");
var morgan = require("morgan");
console.log(todo_db.next_todo_id );
var app = express();
app.use("/",bodyparser.urlencoded({extended:false}))
// on get request send the list of todos in json format
app.get("/", function (req,res) {
    res.json(todo_db.todos)
})

app.delete("/api/todos/:id", function (req,res) {
    var  did = req.params.id; //id_to_be_marked_deleted
    var x = todo_db.todos[did];
    if(!x)
    {
        res.status(404).json({err:"requested id does not exist"});
    }
    else
    {
        x.status = todo_db.StatusENUMS.COMPLETE;
        res.json(todo_db.todos)
    }
});
app.post("/api/todos", function (req,res) {
    var x = req.body.some_title;
    if(x=="" || x.trim()=="")
    {
        res.send(400).json({error: "todo title can not be empty"});
    }
    else
    {
        var new_todo = {title : req.body.some_title,
        status:todo_db.StatusENUMS.ACTIVE}
    }
    todo_db.todos[todo_db.next_todo_id] = new_todo;
    todo_db.next_todo_id = todo_db.next_todo_id + 1;
    res.json(todo_db.todos)


})
app.put("/api/todos/:id", function (req,res) {
    var mid = req.params.id; // mid = id to be modified
    var x = todo_db.todos[mid]
    if(!x)
    {
        res.status(404).json({error:"ID you want to modify does not exist"});
    }
    else
    {
        var todo_title = req.body.title;
        if(todo_title && todo_title!="" && todo_title.trim()!=""){
            x.title = todo_title;
        }
        var todo_status =req.body.todo_status;
        if(todo_status && todo_status==todo_db.StatusENUMS.ACTIVE ||todo_status==todo_db.StatusENUMS.COMPLETE){
            x.status = todo_status;
        }
    }

})
//--------------------------------------------------------------------------------------------
app.get("/api/todos/active", function (req,res) {
    var store_active = {}
    var count = 0;
    for (var i =1;i< todo_db.next_todo_id;i++)
    {
        if(todo_db.todos[i].status == todo_db.StatusENUMS.ACTIVE)
        {
            store_active[count] = todo_db.todos[i];
            count = count + 1;
        }
    }
    res.json(store_active)

});
//------------------------------------------------------------------------------------
app.get("/api/todos/delete", function (req,res) {
    var store_delete = {}
    var count = 0;
    for (var i =1;i< todo_db.next_todo_id;i++)
    {
        if(todo_db.todos[i].status == todo_db.StatusENUMS.DELETED)
        {

            store_delete[count] = todo_db.todos[i];
            count = count + 1;
        }
    }
    res.json(store_delete)

});
//------------------------------------------------------------------------------------------
app.get("/api/todos/complete", function (req,res) {
    var store_complete = {}
    var count = 0;
    for (var i =1;i< todo_db.next_todo_id;i++)
    {
        if(todo_db.todos[i].status == todo_db.StatusENUMS.COMPLETE)
        {

            store_complete[count] = todo_db.todos[i];
            count = count + 1;
        }
    }
    res.json(store_complete)

});
//------------------------------------------------------------------------------------------

app.put("/api/todos/complete/:id", function (req,res) {
    var id = req.params.id;
    //var id = todo_db.todos[x]
    if(!id)
    {
        res.status(404).json({error:"ID you want to modify does not exist"});
    }
    else
    {
        todo_db.todos[id].status =todo_db.StatusENUMS.COMPLETE;
    }

})

app.put("/api/todos/active/:id", function (req,res) {
    var id = req.params.id;
    //var id = todo_db.todos[x]
    if(!id)
    {
        res.status(404).json({error:"ID you want to modify does not exist"});
    }
    else
    {
        todo_db.todos[id].status =todo_db.StatusENUMS.ACTIVE;
    }

})
app.use(morgan('dev'));
app.listen(5000,"127.0.0.1");
