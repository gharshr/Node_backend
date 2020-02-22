var fs = require("fs");
var con = require("./Connection")

exports.listProduct = function (rs,url) {    
    con.Configure.query("SELECT * FROM product_list", function (err, result, fields) {
        console.log("Hello");
        if (err) throw err;
        rs.write(JSON.stringify(result));
        rs.end();
    });
    console.log("In the console");
    // data = fs.readFileSync('trainees.json');
    // data = 
    // data = JSON.parse(data);
	// rs.write(JSON.stringify(data[url[2]]));
}