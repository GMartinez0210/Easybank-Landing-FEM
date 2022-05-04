import React from "react";

function NavbarNav(props) {
    return (
        <ul key={"navbar-nav-"+Math.round(Math.random * 5)} className={`navbar-nav ${props.extraClassUl}`}>
            {props.items.map((item, index) => {
                return (
                    <li key={"nav-item-"+index + Math.round(Math.random() * 10)} 
                        className={`nav-item item ${props.extraClassLi}`}>
                        <a className="nav-link link" href="#">{item}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarNav