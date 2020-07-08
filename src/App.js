import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './style/style.css'
import Nav from "./component/nav";
import Dashboard from "./pages/dasboard";
import Folder from "./pages/folder";
import Envelope from "./pages/envelope";
import File from "./pages/file";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>
                    <Switch>
                        <Route path="/folder" component={Folder}/>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/envelope" component={Envelope}/>
                        <Route path="/file" component={File}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


