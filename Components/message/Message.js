import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

function Message({ photo, displayName,  timestamp, message, uid}) {
    return (
        <div className="message">
            <Avatar src={photo} />
            <div className="message__info">
                <h4>
                    {displayName}
                    <span className="message__timestamp">{timestamp}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
