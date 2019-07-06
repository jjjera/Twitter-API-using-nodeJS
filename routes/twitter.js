var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: '9vKGMdMFgMVulRmdspgLKTdqL',
  consumer_secret: '7KPhAVRXSXfO0oY0rLl6f8WXUKY71YXQcVvHdxth5KqVbKN3mY',
  access_token_key: '2482500120-JJYcBWyA7EfgYf55osfO6MtgQ6tQ7fVNu8szcA3',
  access_token_secret: '1FGueCn1Q9Nz8Bv6gOe2QftPzX9Fp1RzjBn37uzagSWEw'
});

// router.get('/twitter', function(req, res, next) {
//   // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
//   client.get('statuses/user_timeline', { screen_name: 'jerald george', count: 2 }, function(error, tweets, response) {
//     if (!error) {
//       res.status(200).render('index', { title: 'Express', tweets: tweets });
//     }
//     else {
//       res.status(500).json({ error: error });
//     }
//   });
// });

// var params = {screen_name: 'nodejs'};
router.get('/twitter', function(req, res, next) {
var params = {screen_name: 'jerald george', count: 1};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log('TWEET MESSAGE',tweets);
    res.json({
			statusCode: 200,
			status: "Success1",
			result: tweets,
			message:"Data Updated"
		})
  }
});
})
module.exports = router;