var http = require("http");
var formidable = require("formidable");
var fs = require("fs");


http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"text/html"});

if(req.url=="/fileupload") {
var form = new formidable.IncomingForm();
form.parse(req,function(err,fields,files){
var oldpath = files.file1.path; 
var newpath = "c:/Users/jitendra/Documents/meanapp/uploads/"+files.file1.name;
fs.rename(oldpath,newpath,function(err){
if(err) throw err;
res.write("files uploaded in "+newpath);
res.end();
});

});
}
else
{
res.write("<form action=fileupload method=post name=form1 enctype='multipart/form-data'>");
res.write("<input type=text name=text1>");
res.write("<input type=file name=file1>");
res.write("<input type=submit name=submit1>");
res.write("</form>");
return res.end();
}

}).listen(3000);