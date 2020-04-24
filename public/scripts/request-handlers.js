// public/scripts/requests.js

/**
 * Sends a POST request to the server with the submitted text.
 * @param {object} event - DOM event object
 */
const postTweet = function(event) {
  event.preventDefault();

  // const textArea = $('#tweet-text');
  const tweetText = $('#tweet-text').val();
  const isValid = validateTweet(tweetText);

  if (isValid) {
    const formData = $(this).serialize();
    $.post('/tweets', formData)
    .then(() => {
      $(this)[0].reset();
      loadTweets();
    });
  }

  $('#tweet-text').focus();
};

/**
 * Sends a GET request to the server for the latest posts.
 */
const loadTweets = function() {
  $.get('/tweets')
  .then(function(tweets) {
    $('#timeline').empty();
    renderTweets(tweets);
  })
};