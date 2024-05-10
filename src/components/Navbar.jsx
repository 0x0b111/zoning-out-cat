import React from "react";
import logo from '../assets/logo.gif'

function Navbar(){
    return(

        <nav className=" bg-black py-4">
            <div className="container mx-auto flex items-center justify-between">
                <ul className= "flex flex-wrap justify-center  space-x-6 sm:space-x-12 text-white w-full sm:w-auto mx-auto">
                    <li><a href="https://twitter.com/ZoningOutCatSol">Twitter</a></li>
                    <li><a href="https://t.me/ZoningOutCat_SOL">Telegram</a></li>
                    <li><a href="">Dexscreener</a></li>
                    <li><a href="">Solscan</a></li>
                </ul>

                <div className="text-white">
                    <img src={logo} alt="rei logo" className="h-12 w-auto"/>

                </div>
            </div>
        </nav>
        )
}
export default Navbar;