var con = require("./Connection")

exports.editProduct = function(rq,rs)
{
    var body = '';
    rq.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    rq.on('end', () => {
        console.log(body);
        body = JSON.parse(body);
        Qu = "UPDATE `products`.`product_list` SET `Product_ID` = ?, `Product_Name` = ?, `Product_Price` = ?, `Product_Quantity` = ?, `Product_Description` = ? WHERE (`Product_ID` = ?);";
        FieldValues =  [parseInt(body.Product_ID),body.Product_Name,body.Product_Price,parseInt(body.Product_Quantity),body.Product_Description,parseInt(body.Product_ID)];
        console.log(FieldValues + '\n' + Qu);
        con.Configure.query(Qu,FieldValues, function (err, result) {
            if(err) {
                rs.write("{\"Status\":\"unable to Update\"}");
                rs.end();
                throw err;
            }
            rs.write("{\"Status\":\"Successfull\"}");
            rs.end();
        });
    });
}