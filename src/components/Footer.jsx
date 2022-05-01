import React from "react";
import logoWhite from "../images/logo-white.svg"
import redes from "../redes"
import Redes from "./Redes"

function Footer() {
    return (
        <footer className="footer">
            <div className="py-5 container">
                <div className="row">
                    <div className="col col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="col col-lg-6 col-sm-12">
                                <div className="col mb-5">
                                    <img src={logoWhite} />
                                </div>
                                <div className="col footer-social">
                                    {redes.map((red, index) => {
                                        return (
                                            <Redes 
                                                key={"social-media-"+index}
                                                index = {index}
                                                red = {red}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col col-lg-6 col-12">
                                <nav className="navbar footer-navbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">About us</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">Contact</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">Blog</a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav">
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">Careers</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">Support</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link link" href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col col col-lg-3 col-12">
                        <button className="btn btn-lg btn-gradient px-3 mb-5">
                            <span className="px-3">Request Invite</span>
                        </button>
                        <p>&copy; Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer