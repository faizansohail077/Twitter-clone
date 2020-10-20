import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'faizan',
            username: 'faizzy',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/94785242_253701049103929_5235586033134862336_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGMhqIJyydVFWNTkLrsMil9cbLQbQy1n1VxstBtDLWfVbEVs4O-XHTQ41LhsugD30OZTPQZJ8AOC0xCTpWfeeEF&_nc_ohc=-aYzBVB_IyoAX8j-W8g&_nc_ht=scontent.flhe3-1.fna&oh=caf00ed3fa078137137de3d0c98c0230&oe=5FB339E2'
        })
        setTweetMessage('');
        setTweetImage('')

    }
    return (
        <div className="tweetBox">

            <form>
                <div className="tweetBox__input">
                    <Avatar alt="Remy Sharp" src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/94785242_253701049103929_5235586033134862336_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGMhqIJyydVFWNTkLrsMil9cbLQbQy1n1VxstBtDLWfVbEVs4O-XHTQ41LhsugD30OZTPQZJ8AOC0xCTpWfeeEF&_nc_ohc=-aYzBVB_IyoAX8j-W8g&_nc_ht=scontent.flhe3-1.fna&oh=caf00ed3fa078137137de3d0c98c0230&oe=5FB339E2" />
                    <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} placeholder="type anything" type="text" />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__inputImage" placeholder="type anything" type="text" />
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
