import React from "react";
import './user.css'

const User = props => {
    return (
        <div className="user">
            <div className="user-content">
                <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
                    <image id="Шар_1" data-name="Шар 1" x={props.x} y={props.y} width={props.width} height={props.height} href={props.href}/>
                </svg>
                <span className="user-name">{props.name}</span>
            </div>
            <span className="user-percent">{props.percent}</span>
        </div>
    )
};

export default User