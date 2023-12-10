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
import SignUpPage from './Signup';

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
        
            <Routes>
                
                <Route index element={<HomePage/>} />
                <Route path="/" element={<HomePage/>} />
                <Route path="/direct" element={<MessagesPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/direct/new" element={<SendMessageBox/>}/>
                <Route path="/direct/inbox/" element={<MessageArea/>}/>

                <Route path="/homepage/loginpage" element={<LoginPage/>}/>
                <Route path ="/homepage/search" element={<Search/>}/>
                <Route path="homepage/profile" element={<Profile/>}/>
                <Route path="homepage/explore" element={<Explore/>}/>
                <Route path="homepage/reels" element={<Reels/>}/>
                <Route path="homepage/notifications" element={<Notifications/>}/>
                <Route path="homepage/create" element={<Create/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>

        </div>
    );
}

export default Layout;