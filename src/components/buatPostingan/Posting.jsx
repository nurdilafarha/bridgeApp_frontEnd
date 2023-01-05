import "./Posting.css";
import {PermMedia, Label} from '@mui/icons-material';
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";

const Posting =()=>{

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        };
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try{
                await axios.post("/upload", data);
            }catch(err){
                console.log(err)
            }
        }

        try{
            await axios.post("/posts", newPost);
            window.location.reload()
        }catch(err){

        }
    };

    return (
            <div className="posting">
                <div className="postingWrapper">
                    <div className="postingTop">
                        <img className="postingProfileImg" 
                        src={user.profilePicture ? PF+user.profilePicture : PF+"noprofile2.jpeg"}
                        alt=""
                        />
                        <textarea placeholder="Tulis postingan anda disini.." 
                        className="postingInput"
                        ref={desc}
                        />
                    </div>
                    <hr className="postingHr"/>
                    <form className="postingBottom" onSubmit={submitHandler}>
                        <div className="postingOptions">
                            <label htmlFor="file" className="postingOption">
                                <PermMedia htmlColor="tomato" className="postingIcon"/>
                                <span className="postingOptionText">Photo</span>
                                <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" 
                                onChange={(e)=>setFile(e.target.files[0])}/>
                            </label>
                            <div className="postingOption">
                                <Label htmlColor="grey" className="postingIcon"/>
                                <span className="postingOptionText">Tags</span>
                            </div>
                        </div>
                        <button className="postingButton" type="submit">Post</button>
                    </form>  
                </div>
            </div>
    )
};

export default Posting

