import React, {Component} from "react";
import '../style/component/filter.css'

export default class Filter extends Component {
    state = {
        search: ''
    };

    searchChange = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({[target.name]: value})
    };

    render() {
        return (
            <div className="filter">
                <div className="search">
                    <i className="font-search"><img src='/img/search.png'/></i>
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
                        <img src='/img/down.png'/>
                    </a>
                </div>
                <div className="notifications">
                    <span className="notifications-line"></span>
                    <ul className="notifications-nav">
                        <li><a className="notifications-font" href="someValidPath">
                            <img src='/img/notifications.png'/></a>
                        </li>
                        <li><a className="notifications-font" href="someValidPath">
                            <img src='/img/logout.png'/></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}