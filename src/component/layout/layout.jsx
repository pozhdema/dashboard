import React from "react";
import Nav from "../nav/nav";
import Header from "../header/header";
import Content from "../content/content";
import './layout.css'

export default function Layout() {
    return (
        <div className="layout">
            <Nav/>
            <div className="layout-content">
                <Header/>
                <Content/>
            </div>
        </div>
    )
}