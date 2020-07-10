import React, {Component} from "react";
import './header.css'

export default class Header extends Component {
    state = {
        search: ''
    };

    searchChange = (e) => {
        this.setState({search: e.target.search})
    };

    render() {
        return (
            <div className="filter">
                <div className="search">
                    <i className="font-search"><img src='/img/search.png' alt='search'/></i>
                    <input
                        type="text"
                        onChange={this.searchChange}
                        name="search"
                        value={this.state.search}
                        className="input-search"
                        placeholder="Search..."
                    />
                </div>
                <div className="lecturer">
                    <div className="lecturer-over">
                        <div className="lecturer-block">
                            <p>Cody Simmmons</p>
                            <span>Lecturer</span>
                        </div>
                        <div className="lecturer-img"></div>
                    </div>
                    <a className="lecturer-font" href="someValidPath">
                        <img src='/img/down.png' alt='down'/>
                    </a>
                </div>
                <div className="notifications">
                    <span className="notifications-line"></span>
                    <ul className="notifications-nav">
                        <li><a className="notifications-font" href="someValidPath">
                            <img src='/img/notifications.png' alt='notifications'/></a>
                        </li>
                        <li><a className="notifications-font" href="someValidPath">
                            <img src='/img/logout.png' alt='logout'/></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}