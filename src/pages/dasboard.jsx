import React, {Component} from "react";
import '../style/pages/dashboard.css'
import Filter from "../component/filter";
import Controls from "../component/controls";
import Content from "../component/content";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="pages">
                <Filter/>
                <div>
                    <Controls/>
                    <Content
                        icon='/img/person.png'
                        title="62"
                        content="Students"
                    />
                </div>
            </div>
        )
    }
}