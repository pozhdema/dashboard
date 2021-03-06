import React from "react";
import './user.css'

const User = props => {
    return (
        <div className="user">
            <div className="user-content">
                <img src={props.icon} alt='user'/>
                <span className="user-name">{props.name}</span>
            </div>
            <span className="user-percent">{props.percent}</span>
        </div>
    )
};

export default User