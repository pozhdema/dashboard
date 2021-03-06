import React from "react";
import './mark.css'
import User from "../user/user";
import userList from "./just";

const Mark = () => {
    return (
        <div className="block mark">
            <div className="mark-nav">
                <p className="mark-nav-caption">Students by average mark</p>
                <div className="mark-nav-subtitle">
                    <span>Descending</span>
                    <a href="someValidPath" className='font-down'>
                        <img src='/img/more.png' alt='more'/>
                    </a>
                </div>
            </div>
            <div className="mark-content">
                {userList.map((userList, index) => {
                    return (
                        <User
                            key={index}
                            icon={userList.icon}
                            name={userList.name}
                            percent={userList.percent}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Mark;