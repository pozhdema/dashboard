import React, {useState} from "react";
import './header.css'

function Header() {
    const [search, setSearch] = useState('');
    const [more, setMore] = useState(false);

    return (
        <div className="header">
            <div className="search">
                <i className="font-search">
                    <img src='/img/search.png' alt='search'/>
                </i>
                <input
                    type="text"
                    onChange={(event) => setSearch(event.target.value)}
                    name="search"
                    value={search}
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
                <span  onClick={() => {setMore(!more)}}
                   className={more===true ? "more-active" : "more"}>
                    <img src='/img/more.png' alt='more'/>
                </span>
            </div>
            <div className="notifications">
                <ul className="notifications-nav">
                    <li>
                        <a href="someValidPath">
                            <img src='/img/notifications.png' alt='notifications'/>
                        </a>
                    </li>
                    <li>
                        <a href="someValidPath">
                            <img src='/img/logout.png' alt='logout'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header