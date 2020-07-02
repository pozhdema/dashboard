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
                    <Link to="/folder" className="link">
                        <li><a className="navigations-font" href="someValidPath"><img src='/img/folders.png'/></a></li>
                    </Link>
                    <Link to="/dashboard" className="link">
                        <li><a className="navigations-font" href="someValidPath"><img src='/img/chart.png'/></a></li>
                    </Link>
                    <Link to="/envelope" className="link">
                        <li><a className="navigations-font" href="someValidPath"><img src= '/img/mail.png'/></a></li>
                    </Link>
                    <Link to="/file" className="link">
                        <li><a className="navigations-font" href="someValidPath"><img src='/img/files.png'/></a></li>
                    </Link>
                </ul>
                <div className="settings">
                    <a className="settings-font" href="someValidPath"><img src='/img/settings.png'/></a>
                </div>
            </nav>
        )
    }
}