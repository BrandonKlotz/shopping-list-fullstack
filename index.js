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

app.get("/api/", (req, res) => {
	pool.query(selectItems).then(function(result) {
	 res.send(result.rows);
	});
});

app.post("/api/", (req, res) => {
	 var newItem = req.body;
   pool.create(newItem);
	 res.send(result.rows);
	 res.send("SUCCESS");
 });


// DELETE /api/contacts/{ID} - delete an contact from the database. The contact is
// selected via the {ID} part of the URL.
app.delete('/api/:id', function(req, res) {
    var id = req.params.id;
    pool.delete(id);
    res.send("SUCCESS");
});


// We can use an environment variable to pick the port this server runs on (this
// will help us if we use Heroku later). Otherwise, default to port 5000.
var port = process.env.PORT || 5001;
// Start the server!
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
