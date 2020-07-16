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
                <i className="font-pencil">
                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                        <image id="Шар_1" data-name="Шар 1" width="16" height="16" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVQ4jaWS/W3CQAzFn30MABJ0jXYD1AkaMQEdAEQnIEzQo10AFoiyQTtCugZCShfArnxNIr6qXIr/Olv3e+fnMyEyFsnuQbm3hKIvJNv3bLgxMkrgF3YfAPp1TcHpWzZYtQocw6S6hqJQplfLBXjhLi8LudLnw82B9NlyVn3qRcLmNyFIOp+U1r/J4c8ZnLQNWflslF6ZwzcJP15YuAZb3ed3RdVJA/t8UHAMbDGflEu7cgyfWGiDzf853Aj8Fw4Ct8DhK4V4UU3Wd4WDQH0QHL66whbNIjHceJbswezuAbmYdqsAgCkzTasNi4KDACs+lTQsZx0kbh0DA8APjfW0S6VQBPYAAAAASUVORK5CYII="/>
                    </svg>
                </i>
                <Btn
                    title="Manage dashboard"
                    id="btn-pencil"
                />
                <i className="font-plus">
                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                        <image id="Шар_1" data-name="Шар 1" width="16" height="16" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAT0lEQVQ4jWPABf7//6/wHwHkcaljwmkCkWDUAAYGFlBo45BDFlf8//8/IzZFjKCIosQFlHsB5DwcciAv7IeyHRkYGB6QZPJoSqSXAQwMDAAgvCj7+TvLlwAAAABJRU5ErkJggg=="/>
                    </svg>
                </i>
                <Btn
                    title="Create new dashboard"
                    id="btn-plus"
                />
            </div>
        </div>
    )
}