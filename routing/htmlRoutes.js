// Your htmlRoutes.js file should include two routes:
var path = require("path");

module.exports = function (app) {

// A GET Route to /survey which should display the survey page.
app.get("/survey", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});

};


