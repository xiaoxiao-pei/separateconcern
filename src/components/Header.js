import '../css/header.css'
import React from "react";
//import { NavLink } from "react-router-dom";
//import HomeButton from "./HomeButton";
import NavButton from './NavButton';


function Header() {
    return (
        <div class= "App-header">
            {/* <div>
                <HomeButton />
            </div> */}
            <div >
                <NavButton to="/" label="Home" />
                <NavButton to="/about" label="About" />
                <NavButton to="/contact" label="Contact" />
            </div>
        </div>
    );
}
export default Header;