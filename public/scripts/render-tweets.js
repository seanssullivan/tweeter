// public/scripts/compose-tweets.js

/**
  * Renders an array of tweets to the page.
  * @param {array} tweetsArray 
  */
 const renderTweets = (tweetsArray) => {
  const $timeline = $('#tweets-container');
  for (const tweetObj of tweetsArray) {
    const $tweet = createTweetElement(tweetObj);
    $timeline.append($tweet);
  }
};

/**
 * Generates the HTML to display a tweet.
 * @param {object} tweet 
 */
const createTweetElement = (tweet) => {
  const $tweet = $(`
  <article class="tweet">
    <header>
      <div class="user-info">
        <img class="user-avatar" src="#">
        <h3 class="user-name">${tweet.user.name}</h3>
      </div>
      <div class="handle">
        <span class="user-handle">${tweet.user.handle}</span>
      </div>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
      <span class="time-posted">${createPostDate(tweet.created_at)}</span>
      <form method="POST" action="#">
        <button class="flag-tweet"></button>
        <button class="share-tweet"></button>
        <button class="heart-tweet"></button>
      </form>
    </footer>
  </article
  `);
  return $tweet;
};
