import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import MessagesPage from "./MessagesPage";
import SendMessageBox from "./SendMessageBox";
import MessageArea from "./MessageArea";
// import Create2 from "./Create2";
import Search from "./Search";
import Profile from "./Profile";
import Explore from "./Explore";
import Reels from "./Reels";
import Notifications from "./Notifications";
import Create from "./Create";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Createreel from "./Createreel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/direct" element={<MessagesPage />} />
      <Route path="/direct/new" element={<SendMessageBox />} />
      <Route path="/direct/inbox/" element={<MessageArea />} />
      <Route path="/homepage/loginpage" element={<LoginPage />} />
      <Route path="/homepage/search" element={<Search />} />
      <Route path="/homepage/profile" element={<Profile />} />
      <Route path="/homepage/explore" element={<Explore />} />
      <Route path="/homepage/reels" element={<Reels />} />
      <Route path="/homepage/notifications" element={<Createreel />} />
      <Route path="/homepage/create" element={<Create />} />
      <Route path="/homepage" element={<Layout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
