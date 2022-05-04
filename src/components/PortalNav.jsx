import React from "react";

function PortalNav() {
    return (
        <>
            <div className="nav-mobile">
                <ul className="p-0">
                    <li className="p-3 nav-item item">
                        <a className="nav-link link" href="#">Home</a>
                    </li>
                    <li className="p-3 nav-item item">
                        <a className="nav-link link" href="#">About</a>
                    </li>
                    <li className="p-3 nav-item item">
                        <a className="nav-link link" href="#">Contact</a>
                    </li>
                    <li className="p-3 nav-item item">
                        <a className="nav-link link" href="#">Blog</a>
                    </li>
                    <li className="p-3 nav-item item">
                        <a className="nav-link link" href="#">Careers</a>
                    </li>
                </ul>
            </div>
            <div className="background-displayed"></div>
        </>
    )
}

export default PortalNav