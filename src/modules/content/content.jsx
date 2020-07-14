import React from 'react';
import {Route, Switch} from "react-router-dom";
import Folder from "../../pages/folder/folder";
import Dashboard from "../../pages/dasboard/dasboard";
import Envelope from "../../pages/envelope/envelope";
import File from "../../pages/file/file";

export  default function Content() {
    return (
        <Switch>
            <Route path="/folder" component={Folder}/>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/envelope" component={Envelope}/>
            <Route path="/file" component={File}/>
        </Switch>
    )
}