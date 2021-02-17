import React, { useEffect } from 'react'
import Chat from '../chat/Chat';
import SideBar from '../sidebar/SideBar';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import Login from '../login/Login';
import { auth } from '../utils/firebase';
import {login, logout} from '../slices/userSlice';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }));
            } else {
                dispatch(logout());
            }
        })
    }, [dispatch])
    return (
        <div className="app">
            {user ? (
                <>
                <SideBar/>
                <Chat/>
                </>                    
            ) : (<Login />)
            }
        
        </div>
    )
}

export default App
