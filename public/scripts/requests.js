// public/scripts/requests.js

/**
 * Sends a POST request to the server with the submitted text.
 * @param {object} event - DOM event object
 */
const postTweet = function(event) {
  event.preventDefault();
  const formData = $(this).serialize();
  $.post('/tweets', formData);
  $(this).reset();
  loadTweets();
};

/**
 * Sends a GET request to the server for the latest posts.
 */
const loadTweets = function() {
  $.get('/tweets')
  .then(function(tweets) {
    $('#tweet-container').empty();
    renderTweets(tweets);
  })
};