var http = require("http");
var a = require("./listProduct");
var b = require("./addProduct");
var c = require("./mail");
var d = require("./editProduct");
var e = require("./deleteProduct");
// const split = require('binary-split');
var formidable = require('formidable');
var FormData = require('form-data');
var fs = require("fs");
const  express  =  require('express');
const  app  =  express()

http.createServer(function (rq,rs) {
	rs.writeHead(200,{'Content-Type': 'text/plain'});	
	url = rq.url.split("/");
	console.log(url);
	if(url[2] == 'list')
	{
	//	console.log("if blocj");
		a.listProduct(rs,url);
	}
	else if(url[2] == 'add' && rq.method == "POST")
	{
		console.log("post with add");
		b.addProduct(rq,rs);
	}
	else if(url[2] == 'edit' && rq.method == "POST")
	{
		console.log("post with edit");
		d.editProduct(rq,rs);
	}
	else if(url[2] == 'delete' && rq.method == "POST")
	{
		console.log("post with delete");
		e.deleteProduct(rq,rs);
	}
	else if(url[1] == 'mail')
	{
		console.log(url[2]);
		c.mail(url[2]);
	}
	// else if(url[2] == 'image')
	// {
	// 	console.log(rq);
	// 	var body = '';
    // 	rq.on('data', chunk => {
    //     	body += chunk.toString(); // convert Buffer to string
    // 	});
    // 	rq.on('end', () => {
	// 		//console.log(body);
	// 		//console.log(typeof(body));
	// 		let af = new FormData(body);
	// 		console.log(af.getBuffer('fileKey'));
	// 		var buffer = new Buffer(body, 'binary');
	// 		fs.writeFile('test.png', buffer,'binary', function(err,written){
	// 			if(err) console.log(err);
	// 			 else {
	// 			  console.log("Successfully written");
	// 			 }
	// 		 });
	// 		const form = formidable({ multiples: true });
	// 		console.log(typeof(body));	
	// 		form.parse(rq, function (err, fields, files) {
	// 			console.log ("Inside the parse mehod");
	// 			//var oldpath = files.filetoupload.path;
	// 			//var newpath = 'C:/Users/harsh.gorakhia/' + files.filetoupload.name;
	// 			//onsole.log ("Insi	de the parse mehod");
    //   			//fs.appendFile(newpath, files, function (err) {
    //     		if (err) throw err;
	// 			console.log(Hello);
	// 			rs.write("{\"Status\":\"File Uploaded\"}");
    //     		res.end(JSON.stringify({ fields, files }, null, 2));
    //   			// });
	// 		});
	// 		console.log("outside the form");
	// 	});
	// 	rs.end();
	// }
}).listen(2121);

console.log('Server running at http://127.0.0.1:2121');