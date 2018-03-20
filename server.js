// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//DATA===========================================================

var customers = [
    {
      name: "Ian Miller",
      phone: "888 555 2222",
      email: "name@gmail.com",
      ID: "imiller"
    }
]

var waitlist = [];
//ROUTES==========================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "other.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

//------------------------------------------------------------------

app.post("/app/newReservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newCustomer = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCustomer.routeName = newCustomer.name.replace(/\s+/g, "");
  
    console.log(newCustomer);

  
    customers.push(newCustomer);
  
  
});

app.get("/api/customers", function(req, res) {
    console.log(customers)
  
    return res.json(customers);
  });




//START SERVER======================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });