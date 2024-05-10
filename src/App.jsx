// App.js
import React from "react";
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Memes from "./components/Memes";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Video />
            <Timeline />
            <Memes/>
            <Footer/>
        </div>
    );
}

export default App;
