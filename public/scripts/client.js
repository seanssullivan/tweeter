/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $(window).scroll(function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $("#return-to-top").css("display", "inherit");
      $("nav").css("display", "none");
    } else {
      $("#return-to-top").css("display", "none");
      $("nav").css("display", "inherit");
    }
  });
  $('#return-to-top').click(returnToTop);
  $('#form-toggle').click(toggleForm);
  $('#tweet-text').on('keyup', updateCounter);
  $('#new-tweet').submit(postTweet);

  loadTweets();
});
