var http = require("http");
var fs = require("fs");
console.log(__dirname);
/*var content;
// First I want to read the file
fs.readFile('./Index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});*/
console.log(__dirname)
http.createServer(
    function(req,res) {
        if (req.url=="/") {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var template_code = fs.readFileSync(__dirname+"/page1.html");
            res.end(template_code);
            //res.end("This is hello world");
        }
    }
).listen(3000,"127.0.0.1")
