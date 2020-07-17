import React from "react";
import Btn from "../btn/btn";
import './controls.css'

export default function Controls() {
    return (
        <div className="row">
            <div className="title">
                <h1>Dashboard</h1>
                <span>Mobile UX/UI Design course</span>
            </div>
            <div className="controls">
                <i className="font-pencil">
                    <img src='/img/edit.png' alt='edit'/>
                </i>
                <Btn
                    title="Manage dashboard"
                    id="btn-pencil"
                />
                <i className="font-plus">
                    <img src='/img/plus.png' alt='plus'/>
                </i>
                <Btn
                    title="Create new dashboard"
                    id="btn-plus"
                />
            </div>
        </div>
    )
}