import { Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Feed from "../components/feed/Feed";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import './Home.css';

export const Homepage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div>
            <Navbar/>

            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
};

export default Homepage;