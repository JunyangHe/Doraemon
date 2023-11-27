import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import BeforeAbroad from "./BeforeAbroad";
import WhileAbroad from "./WhileAbroad";
import Visa from "./Visa";
import Exam from "./Exam";
import Insurance from "./Insurance";
import Communication from "./Communication";
import Transportation from "./Transportation";
import Finance from "./Finance";
import StudyWork from "./StudyWork";
import DiningAccommodation from "./DiningAccommodation";
import Entertainment from "./Entertainment";

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
                <Route path='/exam' element={<Exam />}/>
                <Route path='/insurance' element={<Insurance />}/>
                <Route path='/communication' element={<Communication />}/>
                <Route path='/transportation' element={<Transportation />}/>
                <Route path='/finance' element={<Finance />}/>
                <Route path='/study&work' element={<StudyWork />}/>
                <Route path='/dining&accommodation' element={<DiningAccommodation />}/>
                <Route path='/entertainment' element={<Entertainment />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
            </Router>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);