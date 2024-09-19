import React from "react";

export default function Header() {


    return(

        
        <nav className="topnav">
        <div className="left-tab">
            <a href="/menu">Menu</a>
            <a href="#catering">Catering</a>
            <a href="#about">About</a>
        </div>
        <div className="logo">
            <h3>Country Delight Kitchen</h3>
            <img src="/path-to-your-logo.png" alt="Logo" />
        </div>
        <div className="right-tab">
            <a href="#search">Search</a>
            <a href="#account">Account</a>
            <a href="#cart">Cart</a>
        </div>
        </nav>
    );
    
}