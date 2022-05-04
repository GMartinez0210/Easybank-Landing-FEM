import React from "react";
import logo from "../images/logo.svg"
import iconHamburger from "../images/icon-hamburger.svg"
import iconClose from "../images/icon-close.svg"
import NavbarNav from "./NavbarNav";
import Portal from "../Portal"
import ButtonGradient from "./ButtonGradient";

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
                <NavbarNav 
                    extraClassUl = {"mx-auto"}
                    extraClassLi = {"mx-3"}
                    items = {["Home", "About us", "Contact", "Blog", "Careers"]}
                />
                <ButtonGradient 
                    type={"button" }
                    id={"button-request"}
                />
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