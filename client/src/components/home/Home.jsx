import React from "react";
import Whatsapp from "../whatsapp/Whatsapp";
import './home.css';
import VideoTax from './tools/video';
import Compose from "./tools/Compose";
import Service from "./tools/Service";
import AboutHome from "../about/AboutHome";
import ContactUs from "../contactus/ContactUs";
import Workessential from "./tools/workEssential";
import '../../components/Navbar.css'

const Home = () => {
    return (
        <div className="home">
            <div className="backGrond-container">
                <VideoTax />
            </div>
            <Compose />
            <Whatsapp />
            <Service />
            <Workessential />
            <AboutHome />
            <ContactUs />
        </div>
    );
}

export default Home;