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
