import React from "react";

function Article(props) {
    return (
        <article className={`row py-5 ${props.uniqueClass}`}>
            {props.info.map((item, index) => {
                return (
                    <figure key={"figure"+index} className="col col-lg-3 col-md-6 col-12 px-3">
                        <img className="figure-img mx-auto" src={item.img} />
                        <figcaption>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </figcaption>
                    </figure>
                )
            })}
        </article>
    )
}

export default Article