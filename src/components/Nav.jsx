import React from "react";
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg container-fluid">
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
                <button type="button" id="button-request" className="btn bg-navbar btn-lg px-3">
                    <span className="px-3">Request Invite</span>
                </button>
            </div>
            <button type="button" id="nav-button" className="btn btn-lg collapse">
                <img id="hamburger-icon" className="" src={hamburger} />
                <img id="close-icon" className="" src={close} />
            </button>
        </nav>
    )
}

export default Nav