import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './style.css'
import Layout from "./modules/layout/layout";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Layout/>
            </Router>
        );
    }
}


