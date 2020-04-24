/*
 * Updates the character counter while the user inputs text.
 */

/**
 * Updates the character counter.
 */
const updateCounter = function() {
  const text = $(this).val();
  const charsLeft = 140 - parseInt(text.length);
  const counter = $(this).siblings("footer").children(".counter");
  
  counter.text(charsLeft);

  if (charsLeft < 0 && !counter.hasClass("negative")) {
    counter.addClass("negative");
  } else if (charsLeft >= 0 && counter.hasClass("negative")) {
    counter.removeClass("negative");
  }
}
