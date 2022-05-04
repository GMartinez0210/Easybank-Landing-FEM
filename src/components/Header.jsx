import React from "react";
import bgIntroDesktop from "../images/bg-intro-desktop.svg"
import bgIntroMobile from "../images/bg-intro-mobile.svg"
import ButtonGradient from "./ButtonGradient";

function Header() {

    const [screenSize, setSize] = React.useState(window.screen.width)

    window.addEventListener("resize", () => {
        setSize(window.screen.width)
    })

    return (
        <header
        className="container-fluid header">
            <div className="container py-5 header-subcontainer">
                <div className="header-content py-5 my-5">
                    <h1 className="header-title">Next generation digital banking</h1>
                    <p className="header-paragraph">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <ButtonGradient />
                </div>
                <div className="header-decoration position-relative">
                    {
                        (screenSize <= 992) ?
                        <img className="header-background" src={bgIntroMobile} /> :
                        <img className="header-background" src={bgIntroDesktop} />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header