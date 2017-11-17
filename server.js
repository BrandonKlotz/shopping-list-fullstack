const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('client/build'));

const pg = require("pg");

var pool = new pg.Pool({
   user: "brandonklotz",
   password: "",
   host: "localhost",
   port: 5432,
   database: "shoppinglist",
   ssl: false
 });



var selectItems = "SELECT * FROM shoppinglist;"
var grandTotal =  "SELECT SUM(Quantity * Price) FROM shoppinglist;"

app.get("/api/items", (req, res) => {
	pool.query(selectItems).then(function(result) {
	 res.send(result.rows);
	});
});

app.post("/api/items", function(req, res) {
    var shoppinglist = req.body;
    var insert = "INSERT INTO shoppinglist(item, price, quantity) " +
            "values($1::text, $2::dec(4,2), $3::int)";
    var values = [shoppinglist.item, shoppinglist.price, shoppinglist.quantity];
    pool.query(insert, values).then(function() {
        res.status(201);
        res.send("Inserted");
    });
});

app.delete('/api/items/:id', function(req, res) {
    var id = req.params.id;
    pool.query("DELETE FROM shoppinglist WHERE id = $1::int", [id]).then(function() {
        res.send("Success");
    }).catch(errorCallback);
});


// We can use an environment variable to pick the port this server runs on (this
// will help us if we use Heroku later). Otherwise, default to port 5000.
var port = process.env.PORT || 5001;
// Start the server!
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
