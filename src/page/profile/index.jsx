import Navbar from "./../../components/navigation/Navbar";
import Sidebar from "./../../components/navigation/Sidebar";
import Rightbar from "./../../components/rightbar/Rightbar";
import Profile from "./Profile";
import Feed from "./../../components/feed/Feed";
import { useNavigate } from 'react-router';
import './Profile.css'

const HalamanProfil = () => {
    return(
        <>
            <Navbar/>
            <div className="profile">
                <Sidebar/>
                <Profile/>
            </div>
        </>
    )
};

export default HalamanProfil