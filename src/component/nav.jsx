import React, {Component} from "react";
import '../style/component/nav.css'
import {Link} from 'react-router-dom'

export default class Nav extends Component{
    render() {
        return (
            <nav>
                <div className="logo">
                    <img src="/img/logo.png" alt="logo" className="logo-img"/>
                </div>
                <ul className="navigations">
                    <Link to="/folder">
                        <li><img src='/img/folders.png'/></li>
                    </Link>
                    <Link to="/dashboard">
                        <li><img src='/img/chart.png'/></li>
                    </Link>
                    <Link to="/envelope" >
                        <li><img src= '/img/mail.png'/></li>
                    </Link>
                    <Link to="/file" >
                        <li><img src='/img/files.png'/></li>
                    </Link>
                </ul>
                <div className="settings">
                    <a className="settings-font" href="#"><img src='/img/settings.png'/></a>
                </div>
            </nav>
        )
    }
}