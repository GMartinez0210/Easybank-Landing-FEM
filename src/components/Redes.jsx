import React from "react";

function Redes(props) {
    
    const [redState, setRed] = React.useState(true)

    function handleOver() {   
       setRed(false)
    }
    function handleOut() {
        setRed(true)
    }
    
    return (
        <a 
        href="#"
        key={"social-media-"+props.index} 
        id={"social-media-"+props.index}
        className="social-media" 
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        >
            <img className="img-social-media" 
                src={redState ? props.red.white : props.red.green} />
        </a>
    )
}

export default Redes