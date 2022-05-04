import React from "react";

function Article(props) {
    return (
        <article className={`row py-5 ${props.uniqueClass}`}>
            {props.info.map((item, index) => {
                let isIcon
                if (props.uniqueClass == "article-icons") isIcon = true
                else isIcon = false

                return (
                    <figure key={"figure"+index} className="col col-lg-3 col-md-6 col-12 px-3">
                        <figure className={
                                isIcon ?
                                "figure-content" :
                                "figure-content figure-card"
                            }>
                            <img className="figure-img" src={item.img} />
                            <figcaption className={!isIcon ? "figcaption-card p-3" : ""}>
                                {!isIcon && <p className="figcaption-author">{item.author}</p>}
                                <h3 className="figcaption-title">{item.title}</h3>
                                <p className="figcaption-description">{item.content}</p>
                            </figcaption>
                        </figure>
                    </figure>
                )
            })}
        </article>
    )
}

export default Article