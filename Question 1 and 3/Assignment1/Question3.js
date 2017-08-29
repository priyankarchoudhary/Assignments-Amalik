var express = require("express")
app = express()
//------------------------------------------------
function callback(a,vi)
{
    if(vi==0) // vi can be either o or 1
    {
        var b = a*a*a;
    }
    if(vi==1)
    {
        var b = a*a*a;
        return b;
    }
}
//---------------------------------------------------
function foreach(ary,callback,re) {
    size = ary.length;
    ary1 = [];
    for(var i=0;i<ary.length;i++)
    {
        var x = callback(ary[i],re)
        ary1.push(x);
        console.log(x);
    }
    return ary1;

}
function map(ary,callback,re) {
    size = ary.length;
    ary2 = [];
    for(var i=0;i<ary.length;i++)
    {
        var x = callback(ary[i],re)
        ary2.push(x)
        console.log(x);
    }
    return ary2;
}
ary = [1,2,3,4,5];
app.get("/foreach",function (req,res) {

    received = foreach(ary,callback,0);
    res.send("original array was  "+ary+" and qubic array is "+received);
})
app.get("/map",function (req,res) {

    received1 = map(ary,callback,1);

    res.send("original array was  "+ary+" and qubic array is "+received1);
})
app.listen(3300,'127.0.0.1');