import Navbar from "./../../components/navigation/Navbar";
import Sidebar from "./../../components/navigation/Sidebar";
import Profile from "./Profile";
import { useNavigate } from 'react-router';

const HalamanProfil = () => {
    return(
        <div>
            <Navbar/>
            <div className="halamanProfil">
                <Sidebar/>
                <Profile/>
            </div>
        </div>
    )
};

export default HalamanProfil