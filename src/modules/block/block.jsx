import React from "react";
import './block.css'

const Block = ({styles, icon, title, subtitle, content}) => (
    <div className="content">
        <div className="ellipse" id={styles}>
            <img src={icon} className="font-ellipse" alt='icon'/>
        </div>
        <div className="content-title">
            <h4>{title}<span>{subtitle}</span></h4>
            <span>{content}</span>
        </div>
    </div>
);

export default Block