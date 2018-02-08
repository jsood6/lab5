// Get all of our friend data
//so, all the fake "database" data file is loaded into the variable data
//and this will get printed to the console via console.log whenever you 
//load the page
//STILL HAVE TO WORK ON THE LAB! STUCK ON SLIDE 19, GO TO LAB ON THURSDAY!!

var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	//res.render('index');
	//render inserts variables into the HTML template
	res.render('index', data)
};