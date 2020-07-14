import React from "react";
import './mark.css'
import User from "../user/user";

export default function Mark() {
    return (
        <div className="mark">
            <div className="mark-nav">
                <p className="mark-nav-caption">Students by average mark</p>
                <div className="mark-nav-subtitle">
                    <span>Descending</span>
                    <a href="someValidPath"><img src='/img/down.png' alt="down"/></a>
                </div>
            </div>
            <div className="mark-content">
                <User
                    icon="/img/anna.png"
                    name="Annette Watson"
                    percent="9.3"
                />
                <User
                    icon="/img/calvin.png"
                    name="Calvin Steward"
                    percent="8.9"
                />
                <User
                    icon="/img/ralf.png"
                    name="Ralph Richards"
                    percent="8.7"
                />
                <User
                    icon="/img/bernard.png"
                    name="Bernard Murphy"
                    percent="8.2"
                />
                <User
                    icon="/img/arlen.png"
                    name="Arlene Robertson"
                    percent="8.2"
                />
                <User
                    icon="/img/jane.png"
                    name="Jane Lane"
                    percent="8.1"
                />
                <User
                    icon="/img/pat.png"
                    name="Pat Mckinney"
                    percent="7.9"
                /> <User
                icon="/img/pat.png"
                name="Pat Mckinney"
                percent="7.9"
            />
            </div>
        </div>
    )
}