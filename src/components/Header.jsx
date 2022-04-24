import React from "react";
import bgIntroDesktop from "../images/bg-intro-desktop.svg"

function Header() {

    return (
        <header className="container-fluid header">
            <div className="container py-5 d-flex flex-wrap">
                <div className="header-content py-5 my-5">
                    <h1 className="header-title">Next generation digital banking</h1>
                    <p className="header-paragraph">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className="btn btn-lg px-3 btn-gradient">
                        <span>Request Invite</span>
                    </button>
                </div>
                <div className="header-decoration position-relative">
                    <img className="header-background" src={bgIntroDesktop} />
                </div>
            </div>
        </header>
    )
}

export default Header