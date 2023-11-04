import React, { Component } from "react";
import BeforeAbroad from "./BeforeAbroad";
import WhileAbroad from "./WhileAbroad";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
                <Route path='/' element={
                    <div>
                        <img src="../static/images/Home.png" />
                        <Link to="/before"><button class="beforeBtn button">留学前</button></Link>
                        <Link to="/while"><button class="whileBtn button">留学中</button></Link>
                    </div>
                
                }/>
            </Routes>
        </Router>);
    }
}