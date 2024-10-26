import { tweetsData } from "./data";

const tweetInput = document.querySelector('#tweet-input')
const tweetBtn = document.querySelector('#tweet-btn')
const feedEl = document.querySelector('#feed')

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value);
    
})

document.addEventListener('click', function(e) {     
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }

})

function handleLikeClick(tweetId) {
    // tweetsData.forEach(tweet => {
    //     if (tweet.uuid === tweetId) {
    //         const targetTweetObj = tweet
    //         targetTweetObj.likes ++
    //         render()
    //     }
    // });

    const targetTweetObj = tweetsData.filter(function(tweet) {
        return tweet.uuid === tweetId
    })[0]

    targetTweetObj.likes++
    render()
}

function getFeedHtml() {

    let feedHtml = ``

    tweetsData.forEach(tweetData => {
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src=${tweetData.profilePic} class="profile-pic">
                <div>
                    <p class="handle">${tweetData.handle}</p>
                    <p class="tweet-text">${tweetData.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweetData.uuid}"></i>
                            ${tweetData.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fas fa-heart" data-like="${tweetData.uuid}"></i>
                            ${tweetData.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fas fa-retweet" data-retweet="${tweetData.uuid}"></i>
                            ${tweetData.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>
    `
    });    
    return feedHtml
}

function render() {
    feedEl.innerHTML = getFeedHtml()
}

render()