/*
 * Updates the character counter while the user inputs text.
 */

/**
 * Updates the character counter.
 * @param {object} self 
 */
const updateCounter = function(self) {
  const text = $(self).val();
  const charsLeft = 140 - parseInt(text.length);
  const counter = $(self).siblings(".counter");
  
  counter.text(charsLeft);

  if (charsLeft < 0 && !counter.hasClass("negative")) {
    counter.addClass("negative");
  } else if (charsLeft >= 0 && counter.hasClass("negative")) {
    counter.removeClass("negative");
  }
}
