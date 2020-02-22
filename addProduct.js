var con = require("./Connection")

exports.addProduct = function(rq,rs)
{
    var body = '';
    rq.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    rq.on('end', () => {
        console.log(body);
        body = JSON.parse(body);
        Qu = "INSERT INTO `products`.`product_list` (`Product_ID`, `Product_Name`, `Product_Price`, `Product_Quantity`, `Product_Description`) VALUES (?,?,?,?,?); ";
        FieldValues =  [parseInt(body.Product_ID),body.Product_Name,body.Product_Price,parseInt(body.Product_Quantity),body.Product_Description];
        //console.log(FieldValues);
        con.Configure.query(Qu,FieldValues, function (err, result) {
            if(err) {
                rs.write("{\"Status\":\"unable to do so\"}");
                rs.end();
                throw err;
            }
            rs.write("{\"Status\":\"Successfull\"}");
            rs.end();
        });
    });
}