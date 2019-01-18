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
        var score = friends.scores;
        var newScore = newFriend.scores;
        var totalPoints = 0;
        var bestCompatibility = 1000;
        var index = -1;

        for (var i = 0; i < friends.length; i++) {
            // Look through all info available in the friends database
            totalPoints = 0;
            for (var j = 0; j < newScore[j].length; j++) {
                // Calculate the total score value of every new friend
                var difference = Math.abs(newScore[j] - score[i]);
                console.log(newScore);
                totalPoints += difference;
            }
            if (totalPoints < bestCompatibility) {
                bestCompatibility = totalPoints;
                index = i;
            }

        }


        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        friends.push(newFriend);

        response.json(newFriend);
    });
};

