var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./mask-2.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.html$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/html"});
        fileStream.pipe(res);
        
    }else if(req.url.match("\.css$")){
      var cssPath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, {"Content-Type": "text/css"});
      fileStream.pipe(res);
      
    }else if(req.url.match("\.js$")){
      var cssPath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, {"Content-Type": "application/javascript"});
      fileStream.pipe(res);

    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

}).listen(3000);