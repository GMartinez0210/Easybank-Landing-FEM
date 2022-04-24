import React from "react";
import Article from "./Article"
import Section from "./Section";
import info from "../info"

function Main() {
    return (
        <main className="main container py-5 my-5">
            {info.map((item, index) => {
                return (
                    <Section key={"section"+index} 
                        title={item.title}
                        content={item.content}
                        info={item.info}
                        uniqueClass={item.uniqueClass}
                    />
                )
            })}
        </main>
    )
}

export default Main