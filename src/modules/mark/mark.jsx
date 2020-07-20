import React from "react";
import './mark.css'
import User from "../user/user";

export default function Mark() {
    const userList = [
        {
            icon: '/img/anet.png',
            name: "Annette Watson",
            percent: "9.3"
        },
        {
            icon: '/img/calvin.png',
            name: "Calvin Steward",
            percent: "8.9"
        },
        {
            icon: '/img/ralf.png',
            name: "Ralph Richards",
            percent: "8.7"
        },
        {
            icon: '/img/bernard.png',
            name: "Bernard Murphy",
            percent: "8.2"
        },
        {
            icon: '/img/arlen.png',
            name: "Arlene Robertson",
            percent: "8.2"
        },
        {
            icon: '/img/jane.png',
            name: "Jane Lane",
            percent: "8.1"
        },
        {
            icon: '/img/pat.png',
            name: "Pat Mckinney",
            percent: "7.9"
        },
        {
            icon: '/img/pat.png',
            name: "Pat Mckinney",
            percent: "7.9"
        }
    ];
    let user = userList.map((userList, index) => {
        return (
            <User
                key={index}
                icon={userList.icon}
                name={userList.name}
                percent={userList.percent}
            />
        )
    });
    return (
        <div className="mark">
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
                {user}
            </div>
        </div>
    )
}