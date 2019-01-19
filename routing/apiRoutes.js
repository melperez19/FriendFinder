// Your apiRoutes.js file should contain two routes:

var path = require("path");
var friends = require("../app/data/friends");

module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (request, response) {
        return response.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic.
    // Add New Friends - takes in JSON input
    app.post("/api/friends", function (request, response) {
        // req.body is equal to the JSON post sent from the user
        var newFriend = request.body;
        newFriend.scores = newFriend.scores.map(function(score){
            return parseInt(score);
        });
        var totalPoints = 0;
        var bestCompatibility = 1000;
        var bestMatchingFriend = friends[0];

        friends.forEach(function(friend) {
            // Look through all info available in the friends database
            var friendScores = friend.scores;
            totalPoints = 0;

            newFriend.scores.forEach((newFriendScore, index) => {
                var friendScore = friendScores[index];
                var difference = Math.abs(newFriendScore - friendScore);
                totalPoints += difference;
            })

            if (totalPoints < bestCompatibility) {
                bestCompatibility = totalPoints;
                bestMatchingFriend = friend;
            }
        })

        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);
        console.log(bestMatchingFriend);

        friends.push(newFriend);

        response.json(bestMatchingFriend);
    });
};

