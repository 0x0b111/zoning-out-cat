import React from "react";
import bg3 from '../assets/Milky_way_bg.gif';
import zcat from '../assets/fullbody_gif2.gif';

function Timeline(){
    return(
        <div className="min-h-screen relative bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${bg3})` }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center md:w-1/2 pr-4">
                        <h1 className="text-3xl md:text-5xl text-indigo-600 font-bold mb-2 md:mb-4">$ZCAT</h1>
                        <h1 className="text-3xl md:text-5xl text-indigo-600 font-bold mb-2 md:mb-4">Supply: 1,000,000,000</h1>
                        <h1 className="text-3xl md:text-5xl text-gray-100 font-bold mb-2 md:mb-4">ZONING OUT CAT</h1>
                        <h1 className="text-3xl md:text-5xl text-indigo-600 font-bold mb-2 md:mb-4">CA:</h1>
                        <h1 className="text-3xl md:text-5xl text-indigo-600 font-bold mb-2 md:mb-4">012900930293402930293209302</h1>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2 pl-4">
                        <img src={zcat} alt="" className="w-full md:max-w-full" style={{ height: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
