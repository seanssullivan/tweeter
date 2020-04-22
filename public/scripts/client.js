/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1585583959088
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1587583959088
  }
]

const renderTweets = (tweetsArray) => {
  const $timeline = $('#timeline');
  for (const tweetObj of tweetsArray) {
    const $tweet = createTweetElement(tweetObj);
    $timeline.append($tweet);
  }
};

const createTweetElement = (tweet) => {
  const $tweet = $(`
  <article class="tweet">
    <header>
      <div class="user">
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

const createPostDate = (timePosted) => {
  const datePosted = new Date(timePosted);
  const timeElapsed = Math.abs(new Date() - datePosted);

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
    displayDate = "Just posted";
  }
  
  return displayDate;
};

renderTweets(data);
