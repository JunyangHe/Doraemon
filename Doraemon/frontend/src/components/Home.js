import React, { Component } from "react";
import BeforeAbroad from "./BeforeAbroad";
import WhileAbroad from "./WhileAbroad";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Router>
            <Routes>
                <Route path='/before' element={<BeforeAbroad />}/>
                <Route path='/while' element={<WhileAbroad />}/>
                <Route path='/' element={<p>This is the Home Page</p>}/>
            </Routes>
        </Router>);
    }
}