import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import ChatHeader from '../chatHeader/ChatHeader';
import Message from '../message/Message';
import './Chat.css';
import { useSelector } from 'react-redux';
import {selectUser}  from '../slices/userSlice'; 
import { selectChannelId, selectChannelName } from '../slices/appSlice';
import db from '../utils/firebase';
import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        if(channelId) {
        db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => 
            setMessages(snapshot.docs.map(doc => doc.data())));
        }
    }, [channelId])

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const sendMessage = e => {
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__message">
                {messages.map((message) => (
                    <Message 
                      photo={message.user.photo}
                      message={message.message}
                      displayName={message.user.displayName}
                      timestamp={message.timestamp}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input value={input} placeholder={`Message #${channelName}` } disabled={!channelId} onChange={handleInput}/>
                    <button type="submit" onClick={sendMessage}className="chat__inputButton" disabled={!channelId}>Send Message</button>
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
