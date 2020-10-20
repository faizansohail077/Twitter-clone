import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Widget.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'


function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__Icon " />
                <input className="widgets__input" placeholder="whats happening" />
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'933354946111705097'} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ heigh: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/faizansohail077"}
                    options={{ text: '#react js is awesome' }}
                />

            </div>
        </div>
    )
}

export default Widget
