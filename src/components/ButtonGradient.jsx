import React from "react";

function ButtonGradient(props) {
    return (
        <button type={props.type} id={props.id} className={`btn btn-gradient btn-lg px-3 ${props.extraClassBtn}`}>
            <span className="px-3">Request Invite</span>
        </button>
    )
}

export default ButtonGradient