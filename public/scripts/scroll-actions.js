// public/scripts/scroll-actions.js

/**
 * Change an element's css attributes to conceal it after the user has scrolled a specific distance.
 * @param {string} selector 
 * @param {number} distance 
 */
const hideWhileScrolling = function(selector, distance) {
  return () => {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      $(selector).css("display", "none");
    } else {
      $(selector).css("display", "flex");
    }
  }
};

/**
 * Change an element's css attributes to display it after the user has scrolled a specific distance.
 * @param {*} selector 
 * @param {*} distance 
 */
const showWhileScrolling = function(selector, distance) {
  return () => {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      $(selector).css("display", "inherit");
    } else {
      $(selector).css("display", "none");
    }
  }
};