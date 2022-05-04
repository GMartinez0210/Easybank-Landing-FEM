import React from "react";
import logoWhite from "../images/logo-white.svg"
import redes from "../redes"
import ButtonGradient from "./ButtonGradient";
import NavbarNav from "./NavbarNav";
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
                                    <NavbarNav 
                                        items = {["About us", "Contact", "Blog"]}
                                    />
                                    <NavbarNav 
                                        items = {["Careers", "Supports", "Privacy Policy"]}
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col col col-lg-3 col-12">
                        <ButtonGradient 
                            extraClassBtn={"mb-5"}
                        />
                        <p>&copy; Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer