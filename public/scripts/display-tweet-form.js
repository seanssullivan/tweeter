// public/scripts/display-tweet-form.js

/**
 * Slides the tweet composer form down.
 * @param {object} event 
 */
const toggleForm = function(event) {
  const tweetComposer = $('#compose-tweet');
  if (tweetComposer.is(':hidden')) {
    tweetComposer.slideDown();
    $('#form-toggle > i')
    .addClass('fa-chevron-up')
    .removeClass('fa-chevron-down');
    
  } else if (tweetComposer.is(':visible')) {
    tweetComposer.slideUp();
    $('#form-toggle > i')
    .addClass('fa-chevron-down')
    .removeClass('fa-chevron-up');
  }
};
