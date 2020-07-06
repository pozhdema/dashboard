import React from "react";
import '../style/component/content.css'

const Content = props => {
    return (
        <div className="content">
            <div className="ellipse" id={props.style}>
                <img src={props.icon} className="font-ellipse"/>
            </div>
            <div className="content-title">
                <h4>{props.title}<span>{props.subtitle}</span></h4>
                <span>{props.content}</span>
            </div>
        </div>
    )
};

export default Content