var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  var newFriend = request;
  newFriend.name = request.query.name;
  newFriend.description = request.query.description;
  newFriend.imageURL = "http://lorempixel.com/500/500/people";
  data.friends.push(newFriend);
  response.render('index', data);
 }
