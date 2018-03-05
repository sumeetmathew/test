//===========================================================
//Connection to MongoDB
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb2";

mongoClient.connect(url,function(err,db) {
if(err) throw err;
console.log("db created");
db.close();
});

//===========================================================
//Upload Files
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

//===========================================================
//Events and Emitters

var events = require("events");
var eventemitter = new events.EventEmitter();

var eventhandler = function(param=null) {
console.log("hello its "+param);
}

eventemitter.on("call",eventhandler);

eventemitter.emit("call","test");



//===========================================================
//REading the FILE from the URL name  and print on Screen
var http = require("http");
var fs = require("fs");
var url = require("url");
var uc = require("upper-case");

http.createServer(function(req,res) {

var page = "."+url.parse(req.url,true).pathname;

fs.readFile(page,function(err,data) {

if(!err) {

res.writeHead(200,{"Content-Type":"text/html"});

res.write(uc(data));

res.end();
}

});
//console.log(page);

}).listen(3000);

////===========================================================
//spliting the URL
var url = require('url');
var http = require('http');

//http.createServer(function(req,res) {

//var result = url.parse(req.url);

var result = url.parse("http://localhost:8080/default.htm?year=2017&month=february",false);

console.log(result.query);
console.log(result.host);
console.log(result.pathname);

var data = result.query.year
console.log(data);

//}).listen(3000);

//===========================================================
//Write Rename and Delete
var http = require("http");
var fs = require("fs");

//http.createServer(function(req,res){

fs.writeFile("test.txt","this is again a test",function(err){
//fs.unlink("test3.txt",function(err){
//fs.rename("test3.txt","test.txt",function(err){
if(err) throw err;
console.log("created and saved");
});

//}).listen(3000);

//===========================================================
//Write and append
var http = require("http");
var fs = require("fs");

//http.createServer(function(req,res){

fs.write/appendFile("test.txt","this is a second demo",function(err){
if(err) throw err;
console.log("saved");
});

//}).listen(3000);

//==================================================================
//READ FROM FILE
var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {

fs.readFile("test.html",function(err,data){
res.writeHead(200,{"Content-Type":"text/html"});
res.write(data);
return res.end();

});

}).listen(3000);

//-----------------------------------------------------------------------------------------------------------
//URL FETCHER
var http = require("http");
var act = require("./add");
var url = require('url');

http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/html"});

var result = url.parse(req.url,true).query 
res.end(req.url.split('&')[0]);

//res.end(result.year+ "][" + result.month);
//console.log(); 10700, 
}).listen(3000);

