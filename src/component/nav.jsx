import React, {Component} from "react";
import '../style/component/nav.css'
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
                Link: '/dashboard',
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
        clicked: "1"
    };

    find = (e) => {
        this.setState({
            clicked: e
        })
    };

    render() {
        let nav =
            this.state.elem.map((e) => {
                return (
                    <Link to={e.Link}>
                        <li onClick={() => this.find(e.id)} id={e.id}
                            className={e.id === this.state.clicked ? "link active" : "link"}><img src={e.src}/></li>
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
                    <a className="settings-font" href="#"><img src='/img/settings.png'/></a>
                </div>
            </nav>
        )
    }
}