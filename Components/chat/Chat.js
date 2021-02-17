import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React from 'react';
import ChatHeader from '../chatHeader/ChatHeader';
import Message from '../message/Message';
import './Chat.css';
import { useSelector } from 'react-redux';
import {selectUser}  from '../slices/userSlice';

function Chat() {
    const user = useSelector(selectUser);
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__message">
                <Message photo={user.photo} displayName={user.displayName} email={user.email} uid={user.uid} timestamp="22:00"/>
            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder={"Message #TEXTCHANNEL"}/>
                    <button type="submit" className="chat__inputButton">Send Message</button>
                </form>
            <div className="chat__inputIcons">
                <CardGiftcard fontSize="large" />
                <Gif fontSize="large" />
                <EmojiEmotions fontSize="large" />
            </div>
                
            </div>
        </div>
    )
}

export default Chat
