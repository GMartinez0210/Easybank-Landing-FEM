import React from "react";
import Article from "./Article";


function Section(props) {
    return (
        <section className={`container-fluid py-5 ${props.backgroundClass}`}>
            <div className="container">
                <div>
                    <h2 className="section-title">{props.title}</h2>
                    <p className="section-content">{props.content}</p>
                </div>
                <Article uniqueClass={props.uniqueClass} info={props.info}/>
            </div>
        </section>
    )   
}

export default Section