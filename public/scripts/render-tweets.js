// public/scripts/compose-tweets.js

/**
  * Renders an array of tweets to the page.
  * @param {array} tweetsArray 
  */
 const renderTweets = (tweetsArray) => {
  const sortedTweets = tweetsArray.sort((a, b) => b.created_at - a.created_at);
  const $timeline = $('#timeline');
  for (const tweetObj of sortedTweets) {
    const $tweet = createTweetElement(tweetObj);
    $timeline.append($tweet);
  }
};

/**
 * Generates the HTML to display a tweet.
 * @param {object} tweet 
 */
const createTweetElement = (tweet) => {
  console.log(tweet);
  const $tweet = $(`
  <article class="tweet">
    <header>
      <div class="user-info">
        <img class="avatar" src="${tweet.user.avatars}">
        <h3 class="username">${escapeText(tweet.user.name)}</h3>
      </div>
      <h3 class="handle">${escapeText(tweet.user.handle)}</h3>
    </header>
    <div class="text-box">
      <span>${escapeText(tweet.content.text)}</p>
    </div>
    <footer>
      <span class="time-posted">${createPostDate(tweet.created_at)}</span>
      <form method="POST" action="#">
        <button class="flag-tweet"><i class="fas fa-flag fa-xs"></i></button>
        <button class="share-tweet"><i class="fas fa-retweet fa-xs"></i></button>
        <button class="heart-tweet"><i class="fas fa-heart fa-xs"></i></button>
      </form>
    </footer>
  </article
  `);
  return $tweet;
};
