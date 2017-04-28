//loading data  - linking to data sources - assuming it's the friends.js fil

var friendData  = require("../data/friends.js");



//this is a function that is passed app data 

//this is a GET request that fires when a user visits the page
//of http://localhost:3000/api/friends and it shows a JSON of the data


module.exports = function(app) {


	app.get("/api/friends", function(req, res){

		res.json(friendData);


	});







//API post request - handles when the user submits the form
//this submits data to the server
//when the user submits form data (a JSON object)
//the JSON is pushed to a javascript array 




	app.post("/api/friends", function(req, res){


			friendData.push(req.body);

			//what would res.json()? do 


	});





//end of module.exports function 
};