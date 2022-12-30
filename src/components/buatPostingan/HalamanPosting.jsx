import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import Posting from "./Posting";
import Rightbar from "../rightbar/Rightbar";
import { useNavigate } from 'react-router';

const HalamanPosting = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/halamanPosting"); 
    };
    return(
        <div>
            <Navbar/>
            <div className="halamanPosting">
                <Sidebar/>
                <Posting/>
                <Rightbar/>
            </div>
        </div>
    )
};

export default HalamanPosting