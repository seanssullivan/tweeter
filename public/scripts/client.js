/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Scroll events
  $(window).scroll(showWhileScrolling("#return-to-top", 400));
  $(window).scroll(hideWhileScrolling("nav", 400));

  // Button events
  $('#return-to-top').click(() => window.scrollTo(0, 0));
  $('#form-toggle').click(toggleForm);

  // Form events
  $('#tweet-text').on('keyup', updateCounter);
  $('#new-tweet').submit(postTweet);

  // Document-ready actions
  loadTweets();
});
