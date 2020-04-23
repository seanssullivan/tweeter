// public/scripts/helpers.js

/**
 * Convert a timestamp to a string representation of the time elapsed since a post was added.
 * @param {number} timePosted - a timestamp in milliseconds
 */
const createPostDate = (timePosted) => {
  const datePosted = new Date(timePosted);
  const timeElapsed = new Date() - datePosted;
  
  const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));
  const minutesElapsed = Math.floor(timeElapsed / (1000 * 60));

  let displayDate = '';
  if (daysElapsed > 1) {
    displayDate = `${daysElapsed} days ago`;
  } else if (daysElapsed === 1) {
      displayDate = `${daysElapsed} day ago`;
  } else if (hoursElapsed > 1) {
    displayDate = `${hoursElapsed} hours ago`;
  } else if (hoursElapsed === 1) {
    displayDate = `${hoursElapsed} hour ago`;
  } else if (minutesElapsed > 1) {
    displayDate = `${minutesElapsed} minutes ago`;
  } else if (minutesElapsed === 1) {
    displayDate = `${minutesElapsed} minute ago`;
  } else {
    displayDate = "just posted";
  }

  return displayDate;
};

/**
 * Sanitizes user input.
 * @param {string} text 
 */
const escapeText = function(text) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

/**
 * Confirms whether or not a tweet is valid.
 * @param {string} tweet 
 */
const validateTweet = function(tweet) {
  
  let output = true;
  if (tweet.length === 0) {
    $("#error-message").text("Tweet cannot be empty");
    output = false;
  } else if (tweet.length > 140) {
    $("#error-message").text("Tweet cannot be longer than 140 characters");
    output = false;
  } else {
    $("#error-message").text('');
  }
  return output;
}