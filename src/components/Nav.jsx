import React from "react";
import logo from "../images/logo.svg"
import iconHamburger from "../images/icon-hamburger.svg"
import iconClose from "../images/icon-close.svg"

import Portal from "../Portal";

function Nav() {

    const [isClose, setClose] = React.useState(true)

    function handleClick() {
        setClose(!isClose)
        Portal(isClose)
    }

    return (
        <nav className="navbar navbar-expand-lg container">
            <a href="#" className="navbar-brand"><img src={logo} /></a>
            <div id="nav-content" className="navbar-collapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-3 item">
                        <a className="nav-link link">Home</a>
                    </li>
                    <li className="nav-item mx-3 item">
                        <a className="nav-link link">About</a>
                    </li>
                    <li className="nav-item mx-3 item">
                        <a className="nav-link link">Contact</a>
                    </li>
                    <li className="nav-item mx-3 item">
                        <a className="nav-link link">Blog</a>
                    </li>
                    <li className="nav-item mx-3 item">
                        <a className="nav-link link">Careers</a>
                    </li>
                </ul>
                <button type="button" id="button-request" className="btn btn-gradient btn-lg px-3">
                    <span className="px-3">Request Invite</span>
                </button>
            </div>
            <button 
                type="button" 
                id="nav-button" 
                className="btn btn-lg collapse"
                onClick={handleClick}>
                {
                    isClose ? 
                    <img src={iconHamburger} /> :
                    <img src={iconClose} />
                }
            </button>
        </nav>
    )
}

export default Nav