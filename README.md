# Friend Finder - Node and Express Servers

### Overview

In this activity, a compatibility-based "FriendFinder" application is built -- basically like a dating app, but for making friends . This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express.js is utilized to handle routing and the app is deployed to Heroku so other users can fill it out and find matches as well as adding more friends to the Friends API.

To determine the user's most compatible friend, the following was used a guide:

   * Each user's results will be converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, the difference between the current user's scores is compared against those from other users, question by question. The differences are then added up to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Here we need to use the absolute value of the differences to avoid negative solutions. Hence, the app will calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

Once the current user's most compatible friend is discovered, the result will display as a modal pop-up.
   * The modal should display both the name and picture of the closest match.

Technologies used in the development of this app include
* HTML5 and CSS
* Bootstrap
* Node.js and Express.js