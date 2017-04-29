//including path package
console.log("htmlRoutes.js");
var path = require("path");





//a module.exports function that takes app data
//GET requests 

//these handle when user vists a page
//user is shown an html page 

//prefix is http://localhost:3000 plus the other requests




module.exports = function(app)  {




//GET route to /survey which has a function that gets the survey file



	app.get("/survey", function(req, res){

		console.log(path.join(__dirname, "../public/survey.html"));

		res.sendFile(path.join(__dirname, "../public/survey.html"));



	});

  

//default to home if no matching route is found


	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));





	});

};