import React, { useState } from 'react';
import defaultStoryBorder from "./photos/story-out.png";
import storyBorderAnimation from "./photos/story-out-animation.gif"
import storyBorderPassive from "./photos/story-out-passive.png"
import { useNavigate } from "react-router-dom";

function StoryElement({ profilePicture, children, checkOpen }) {
    const [isOpened, checker] = useState(false)
    const border = () => {
        if (checkOpen === true) {
            return (<img className="main-page-story-border" src={storyBorderPassive} alt="border" />)
        } else if (isOpened === true) {
            return (<img className="main-page-story-border" src={storyBorderAnimation} alt="border" />)
        } else {
            return (<img className="main-page-story-border" src={defaultStoryBorder} alt="border" />)
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {
        // Pass the image source to the Storylayout component
        navigate("/storylayout", { state: { imageSrc: profilePicture } });
    };

    return (
        <div className="test-box">
            {border()}
            {/* Use the handleClick function for onClick */}
            <img className="main-page-story-pp" src={profilePicture} alt="pp" onClick={handleClick} />

            <div className="main-page-story-username all-gray">{children}</div>
        </div>
    );
}

export default StoryElement;
