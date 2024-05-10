import React, { useState } from "react";
import video from "../assets/zcat_video.mp4";
import Entrance from "./Entrance";
import bg2 from '../assets/Milky_way_bg.gif'

function Video() {
    const [showEntrancePrompt, setShowEntrancePrompt] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    const handleEnterSite = () => {
        setShowEntrancePrompt(false);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div
            className="relative bg-cover"
            style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {showEntrancePrompt && <Entrance onClick={handleEnterSite} />}
            {!showEntrancePrompt && (
                <div className="relative w-full max-w-screen-xl mx-auto">
                    <video className="w-full" src={video} autoPlay muted={isMuted}></video>
                    <button
                        className="absolute top-2 right-2 bg-white border border-purple-300 rounded-full px-3 py-1 text-sm font-medium text-gray-800 shadow"
                        onClick={toggleMute}
                    >
                        {isMuted ? '🔊' : '🔇'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Video;
