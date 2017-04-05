//tells our console that the bot is starting
console.log("The Bot is Starting!");

//require the twit package
var Twit = require('twit');

//We need to authenticate 
var T = new Twit({
  consumer_key:         'gjVEVOdXcRqDPXyuF2FsqLUgZ',
  consumer_secret:      'UltU8psXjuiv7fSWIAa9gIdmgvaRckbr8QqUWtqJ2hKDHlWZ9N',
  access_token:         '847904623536951296-ghUjiGeTR5aUOdAnOFGQdVoVD04SPXV',
  access_token_secret:  'an8Q1MNYEu45NddSu75lXVkjthpg6w0fRTeJwDGM5raDw',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})





//GET---> search by hashtag, location, user, etc
//POST---> Post tweets
//STREAM---> follows, you can @ them, mentions, you can @ them


//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})