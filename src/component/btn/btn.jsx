import React from "react";
import './btn.css'

const Btn = ({id, action, title}) => (
    <button
        className="btn"
        onClick={action}
        id={id}
    >
        {title}
    </button>
);

export default Btn;