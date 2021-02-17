import React, { useState, useEffect } from 'react';
import './SideBar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SideBarChannel from '../sideBarChannel/SideBarChannel';
import { Avatar } from '@material-ui/core';
import { Call, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import firebase from 'firebase';
import db from '../utils/firebase';

function SideBar() {      
    const {uid, photo, displayName} = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),

            })))
        ))
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            db.collection("channels").add({
                channelName,

            })
        }
    }

    return (
        <div className="sideBar">

            <div className="sideBar__top">
                <h1>Discord Chat</h1>
                <ExpandMoreIcon />
            </div>

            <div className="sideBar__channels">
                <div className="sideBar__channelsHeader">
                    <div className="sideBar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sideBar__addChannel" onClick={handleAddChannel} />
                </div>
                <div className="sideBar__channelsList">
                {
                    channels.map(({id, channel}) => (
                        <SideBarChannel key={id} id={id} channelName={channel.channelName} />
                    ))
                }
                </div>
            </div>
                <div className="sideBar__voice">
                    <SignalCellularAlt
                      className="sideBar__voiceIcon"
                      fontSize="large"
                    />
                    <div className="sideBar__voiceInfo">
                        <h3>Voice  Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sideBar__voiceIcons">
                        <InfoOutlined />
                        <Call />
                    </div>
                </div>
            
            <div className="sideBar__profile">
                <Avatar src={photo} onClick={() => {firebase.auth().signOut().then(console.log("fsa")).catch(error => console.log(error))}}/>
                <div className="sideBar__profileInfo">
                    <h3>{displayName}</h3>
                    <p>#{uid.substring(0, 5)}</p>
                </div>
                <div className="sideBar__profileIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
        </div>
    )
}


export default SideBar
