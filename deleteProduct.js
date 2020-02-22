var con = require("./Connection")

exports.deleteProduct = function(rq,rs)
{
    console.log(rq.data);
    var body = '';
    rq.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    rq.on('end', () => {
        console.log(body);
        //body = JSON.parse(body);
        Qu = "DELETE FROM `products`.`product_list` WHERE (`Product_ID` = ?);";
        //FieldValues =  [parseInt(body.Product_ID),body.Product_Name,body.Product_Price,parseInt(body.Product_Quantity),body.Product_Description,parseInt(body.Product_ID)];
        //console.log(FieldValues + '\n' + Qu);
        con.Configure.query(Qu,parseInt(body), function (err, result) {
            if(err) {
                rs.write("{\"Status\":\"unable to Delete\"}");
                rs.end();
                throw err;
            }
            rs.write("{\"Status\":\"Successfull\"}");
            rs.end();
        });
    });
}