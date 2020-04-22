/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $('#tweet-text').on('keyup', updateCounter);
  $('form').submit(postTweet);

  loadTweets();
});
