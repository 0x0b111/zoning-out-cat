import React from "react";
import zcat from '../assets/zcat_intro.jpg';

function Entrance({ onClick }) {
    return (
        <div className="bg-cover fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" style={{backgroundImage: `url(${zcat})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-white p-8 rounded-lg">
                <p className="text-xl mb-4">$ZCAT</p>
                <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">Enter</button>
            </div>
        </div>
    );
}

export default Entrance;
