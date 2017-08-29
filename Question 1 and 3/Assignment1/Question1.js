var express = require("express")
app = express()
function myfunction()
{
        console.log("I am printing synchornously");
}

function setsync(funname,n) {
    var ct = Date.now() + n;
    while(Date.now()< ct)
    {
            funname()
    }
}
app.get("/",function (req,res) {
    var n = 9000;
    setsync(myfunction,n);
    res.send("hello ! I am  working well, You can see it on console")
})
app.listen(3300,'127.0.0.1');