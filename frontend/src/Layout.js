import React from 'react';
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom";
import MessagesPage from "./MessagesPage";
import LoginPage from './LoginPage';
import Profile from './Profile';
import Search from "./Search"
import Explore from "./Explore"
import Reels from "./Reels"
import Notifications from "./Notifications"
import Create from "./Create"
import More from './More';
import SendMessageBox from './SendMessageBox';
import MessageArea from './MessageArea';
// import Create2 from './Create2';

function Layout() {
    return (
        <div>
            <div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
        
            <HomePage/>
        </div>
    );
}

export default Layout;