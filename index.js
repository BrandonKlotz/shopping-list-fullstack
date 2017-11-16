const express = require("express");
const app = express();
const shoppingListDb = require("./in-memory-database")();

shoppingListDb.init([]);

// Serve files from client/dist folder. That's where all of our HTML, CSS, and JS
// from the React client app end up.
app.use(express.static('client/build'));

// This allows us to accept JSON bodies in POSTs and PUTs.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const errorCallback = console.error.bind(console);

app.get("/api/", (req, res) => {
	res.send(shoppingListDb.readAll());
});

app.post("/api/", (req, res) => {
	var newItemToAdd = req.body;
	shoppingListDb.create(newItemToAdd);
	res.send("SUCCESS");
});

// DELETE /api/contacts/{ID} - delete an contact from the database. The contact is
// selected via the {ID} part of the URL.
app.delete('/api/:id', function(req, res) {
    var id = req.params.id;
    shoppingListDb.delete(id);
    res.send("SUCCESS");
});


// We can use an environment variable to pick the port this server runs on (this
// will help us if we use Heroku later). Otherwise, default to port 5000.
var port = process.env.PORT || 5000;
// Start the server!
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
