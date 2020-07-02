import React from "react";
import '../style/component/btn.css'

const Btn = props => {
    return(
        <button
            className="btn"
            onClick={props.action}
            id={props.id}
        >
            {props.title}
        </button>
    );
};
export default Btn;