import React from "react";
import '../style/component/content.css'

const Content = props => {
    return (
        <div className="content">
            <div className="ellipse">
                <img src={props.icon} className="font-ellipse"/>
            </div>
            <div className="content-title">
                <h4>{props.title}</h4>
                <span>{props.content}</span>
            </div>
        </div>
    )
};

export default Content