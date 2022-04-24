import React from "react";
import Article from "./Article";


function Section(props) {
    return (
        <section className="pt-5 mt-5">
            <div>
                <h2 className="section-title">{props.title}</h2>
                <p className="section-content">{props.content}</p>
            </div>
            <Article uniqueClass={props.uniqueClass} info={props.info}/>
        </section>
    )   
}

export default Section