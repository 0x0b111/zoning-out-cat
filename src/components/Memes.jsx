import React from "react";
import bg1 from '../assets/Milky_way_bg.gif';
import meme1 from '../assets/memes/1.jpg';
import meme2 from '../assets/memes/2.jpg';
import meme3 from '../assets/memes/3.jpg';
import meme4 from '../assets/memes/4.jpg';
import meme5 from '../assets/memes/5.jpg';
import meme6 from '../assets/memes/6.jpg';
import meme7 from '../assets/memes/7.jpg';
import meme8 from '../assets/memes/8.jpg';
import meme12 from '../assets/memes/12.png';
import meme14 from '../assets/memes/14.jpg';
import meme16 from '../assets/memes/16.jpg';
import meme17 from '../assets/memes/17.jpg';





function Memes() {
    const imageUrls = [
        meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8,   meme12, meme14, , meme16, meme17, 
    ];

    return (
        <div className="relative bg-cover bg-center bg-gray-200 py-8 px-4" style={{ backgroundImage: `url(${bg1})` }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {imageUrls.map((url, index) => (
                        <div key={index} className="w-full sm:w-auto">
                            <img src={url} alt={`Meme ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Memes;
