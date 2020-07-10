import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './style.css'
import Layout from "../component/layout/layout";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Layout/>
                </div>
            </Router>
        );
    }
}


