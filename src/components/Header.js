import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

function Header() {
    return (
        <div class= "App-header">
            <div>
                <HomeButton />
            </div>
            <div >
                <Link to="/" class= "App-link">Home</Link>
                <Link to="/about" class="App-link" >About</Link>
                <Link to="/contact" class="App-link">Contact</Link>
            </div>
        </div>
    );
}
export default Header;