import "./Posting.css";
import {PermMedia, Label} from '@mui/icons-material';

const Posting =()=>{
    return (
            <div className="posting">
                <div className="postingWrapper">
                    <div className="postingTop">
                        <img className="postingProfileImg" src="/assets/Avatar.jpeg" alt=""/>
                        <textarea placeholder="Tulis postingan anda disini.." 
                        className="postingInput"/>
                    </div>
                    <hr className="postingHr"/>
                    <div className="postingBottom">
                        <div className="postingOptions">
                            <div className="postingOption">
                                <PermMedia htmlColor="tomato" className="postingIcon"/>
                                <span className="postingOptionText">Photo</span>
                            </div>
                            <div className="postingOption">
                                <Label htmlColor="grey" className="postingIcon"/>
                                <span className="postingOptionText">Tags</span>
                            </div>
                        </div>
                        <button className="postingButton">Post</button>
                    </div>  
                </div>
            </div>
    )
};

export default Posting

