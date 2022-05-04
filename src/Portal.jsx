import React from "react";
import ReactDOM, { render } from "react-dom";

import PortalNav from "./components/PortalNav"

function Portal(isClose) {
    const container = document.getElementById("portal")
    container.classList.toggle("show")

    //return ReactDOM.createPortal(<PortalNav />, container)
    if (isClose) render(<PortalNav />, container)
    else render(<></>, container)
}

export default Portal