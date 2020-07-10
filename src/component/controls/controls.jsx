import React from "react";
import Btn from "../btn/btn";
import './controls.css'

export default function Controls() {
    return (
        <div className="controls">
            <div className="controls-block">
                <h2>Dashboard</h2>
                <span>Mobile UX/UI Design course</span>
            </div>
            <div className="controls-btn">
                <i className="font-pencil"><img src='/img/pencel.png'/></i>
                <Btn
                    title="Manage dashboard"
                    id="btn-pencil"
                />
                <i className="font-plus"><img src='/img/plus.png'/></i>
                <Btn
                    title="Create new dashboard"
                    id="btn-plus"
                />
            </div>
        </div>
    )
}