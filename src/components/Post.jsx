import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({ displayName, username, verified, text, image,avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar alt="Remy Sharp" src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/94785242_253701049103929_5235586033134862336_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGMhqIJyydVFWNTkLrsMil9cbLQbQy1n1VxstBtDLWfVbEVs4O-XHTQ41LhsugD30OZTPQZJ8AOC0xCTpWfeeEF&_nc_ohc=-aYzBVB_IyoAX8j-W8g&_nc_ht=scontent.flhe3-1.fna&oh=caf00ed3fa078137137de3d0c98c0230&oe=5FB339E2" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Muhammad faizan{""}
                            <span>
                                <VerifiedUserIcon className="post__badge" />@faizzy
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build twitter clone</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>
            </div>
        </div>
    )
}

export default Post
