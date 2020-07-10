import React from "react";
import './block.css'

const Block = ({style, icon, title, subtitle, content}) => (
    <div className="content">
        <div className="ellipse" id={style}>
            <img src={icon} className="font-ellipse"/>
        </div>
        <div className="content-title">
            <h4>{title}<span>{subtitle}</span></h4>
            <span>{content}</span>
        </div>
    </div>
);

export default Block