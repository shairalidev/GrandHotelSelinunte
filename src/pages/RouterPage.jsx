import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import GDPRCookie from "../components/GDPRCookie";
import LoadTop from "../components/LoadTop";
import HomeVideo from "./HomeVideo";

import About from "./About";
import Resturant from "./Resturant";
import Gallery from "./Gallery";
import Service from "./Service";
import Event from "./Event";
import Activities from "./Activities";
import Contact from "./Contact";
import RoomOne from "./RoomOne";
import RoomTwo from "./RoomTwo";
import RoomThree from "./RoomThree";
import RoomFour from "./RoomFour";
import RoomDetails from "./RoomDetails";
import RoomDetailsTwo from "./RoomDetailsTwo";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import ChatBot from '../components/chatbot/ChatBot';
import ChatFullPage from './ChatFullPage';


function RouterContent() {
  const location = useLocation();

  return (
    <>
      <LoadTop />
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<HomeVideo />} />
        <Route path="/home" element={<HomeVideo />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/resturant" element={<Resturant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/event" element={<Event />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room-one" element={<RoomOne />} />
        <Route path="/room-two" element={<RoomTwo />} />
        <Route path="/room-three" element={<RoomThree />} />
        <Route path="/room-four" element={<RoomFour />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/room2/:id" element={<RoomDetailsTwo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/chat" element={<ChatFullPage />} />
      </Routes>

      {/* Only show popup ChatBot outside of full chat page */}
      {location.pathname !== "/chat" && <ChatBot />}

      <GDPRCookie
        settings={{
          title: "We use cookies",
          message: "This site uses cookies to improve your experience. You can customize your preferences.",
          expires: 90,
          cookieName: "userCookiePrefs",
          acceptBtnLabel: "Accept All Cookies",
          advancedBtnLabel: "Manage Preferences",
          cookieTypes: [
            { type: "Essential", value: "essential", description: "Necessary for site functionality", checked: true },
            { type: "Preferences", value: "preferences", description: "Saves your site preferences", checked: true },
            { type: "Analytics", value: "analytics", description: "Helps us improve site usage", checked: false },
            { type: "Marketing", value: "marketing", description: "Personalized advertising", checked: false },
          ]
        }}
      />
    </>
  );
}

function RouterPage() {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
}

export default RouterPage;
