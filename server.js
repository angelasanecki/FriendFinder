// getting the npm packages


var express = require("express");
var bodyParser = require("body-parser");


//pointing to route files



//making an express server

var app = express();

//setting up the port 
//http://localhost:3000

var PORT = 3000;


//configuring the bodyParser things
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));




// this tells the server what files are used for routing 

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//this is the listener that is listening at the port 


app.listen(PORT, function(){

	console.log("App listening on PORT: " + PORT);

});




// app.get("/survey", function(req, res){

// 		console.log(path.join(__dirname, "../public/survey.html"));

// 		res.sendFile(path.join(__dirname, "../public/survey.html"));



	// });



//export server.js file like everything else and access it the same way you would
//access everything else 