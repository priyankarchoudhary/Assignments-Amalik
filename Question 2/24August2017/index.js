var express = require("express");
var bodyparser = require("body-parser")
var app = express();

app.set("view engine","pug");
app.use("/static",express.static(__dirname+"/public"));
app.use("/",bodyparser.urlencoded({extended:false}));


app.post('/submit', function (req, res) {
    var str = req.body.firstname;
    var d = req.body.dob;
    var day_last = new Date()
    var day_init = new Date(d)
    console.log(day_last);
    console.log(day_init)

    var days = parseInt((day_last - day_init)/(1000*60*60*24));
    res.render("index", {title:"Nagarro bootcamp",
            firstname:"Hello "+ str+"  You have been living on this earth for last",
            days: days +  " days"
        }
    );
});
app.listen(3010,"127.0.0.1");
