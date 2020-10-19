import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'



function TweetBox() {
    return (
        <div className="tweetBox">

            <form>
                <div className="tweetBox__input">
            <Avatar alt="Remy Sharp" src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/94785242_253701049103929_5235586033134862336_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGMhqIJyydVFWNTkLrsMil9cbLQbQy1n1VxstBtDLWfVbEVs4O-XHTQ41LhsugD30OZTPQZJ8AOC0xCTpWfeeEF&_nc_ohc=-aYzBVB_IyoAX8j-W8g&_nc_ht=scontent.flhe3-1.fna&oh=caf00ed3fa078137137de3d0c98c0230&oe=5FB339E2" />
                <input placeholder="type anything" type="text"/>
            </div>
                <input className="tweetBox__inputImage" placeholder="type anything" type="text"/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
