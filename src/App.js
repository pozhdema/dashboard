import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './style.css'
import Layout from "./modules/layout/layout";

const App = () => {
    return (
        <Router>
            <Layout/>
        </Router>
    )
};

export default App;


