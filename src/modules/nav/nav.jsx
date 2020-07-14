import React, {Component} from "react";
import './nav.css'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    state = {
        elem: [
            {
                Link: '/folder',
                id: '0',
                src: '/img/folders.png',
            },
            {
                Link: '/',
                id: '1',
                src: '/img/chart.png',
            },
            {
                Link: '/envelope',
                id: '2',
                src: '/img/mail.png',
            },
            {
                Link: '/file',
                id: '3',
                src: '/img/files.png',
            },
        ],
        activeLinkId: "1"
    };

    select = (event) => {
        this.setState({
            activeLinkId: event
        })
    };

    render() {
        let nav =
            this.state.elem.map((event, index) => {
                return (
                    <Link key={index} to={event.Link} onClick={() => this.select(event.id)}>
                        <li id={event.id}
                            className={event.id === this.state.activeLinkId ? "link active" : "link"}><img src={event.src} alt='navigation'/></li>
                    </Link>
                )
            });
        return (
            <nav>
                <div className="logo">
                    <img src="/img/logo.png" alt="logo" className="logo-img"/>
                </div>
                <ul className="navigations">
                    {nav}
                </ul>
                <div className="settings">
                    <a className="settings-font" href="someValidPath"><img src='/img/settings.png' alt='settings'/></a>
                </div>
            </nav>
        )
    }
}