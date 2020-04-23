// public/scripts/requests.js

/**
 * Slides the tweet composer form down.
 * @param {object} event 
 */
const toggleForm = function(event) {
  $('#compose-tweet').slideDown();
};

const returnToTop = function(event) {
  window.scrollTo(0, 0);
}

/**
 * Sends a POST request to the server with the submitted text.
 * @param {object} event - DOM event object
 */
const postTweet = function(event) {
  event.preventDefault();

  // const textArea = $('#tweet-text'); <-- Why won't the page update with I do this?
  const tweetText = $('#tweet-text').val();
  const isValid = validateTweet(tweetText);

  if (isValid) {
    const formData = $(this).serialize();
    $.post('/tweets', formData);
    $(this)[0].reset();
  }
  
  $('#tweet-text').focus();
  loadTweets();
};

/**
 * Sends a GET request to the server for the latest posts.
 */
const loadTweets = function() {
  $.get('/tweets')
  .then(function(tweets) {
    $('#tweets-container').empty();
    renderTweets(tweets);
  })
};