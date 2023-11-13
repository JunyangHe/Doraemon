import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import BeforeAbroad from "./BeforeAbroad";
import WhileAbroad from "./WhileAbroad";
import Visa from "./Visa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <Routes>
                <Route path='/before' element={<BeforeAbroad />}/>
                <Route path='/while' element={<WhileAbroad />}/>
                <Route path='/visa' element={<Visa />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
            </Router>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);