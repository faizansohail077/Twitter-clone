import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
function Feed() {
    return (
        <div className="feed">

            <div className="feed__header">
                <h2 >Home</h2>

            </div>
            <TweetBox />
            <Post
                displayName="faizan"
                username="faizzy"
                verified={true}
                text="finally its working"
                avatar="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/94785242_253701049103929_5235586033134862336_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGMhqIJyydVFWNTkLrsMil9cbLQbQy1n1VxstBtDLWfVbEVs4O-XHTQ41LhsugD30OZTPQZJ8AOC0xCTpWfeeEF&_nc_ohc=-aYzBVB_IyoAX8j-W8g&_nc_ht=scontent.flhe3-1.fna&oh=caf00ed3fa078137137de3d0c98c0230&oe=5FB339E2"
                image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" />
    

          





        </div>
    )
}

export default Feed
