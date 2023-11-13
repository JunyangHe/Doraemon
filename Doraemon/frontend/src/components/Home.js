import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body>
                <img src="../static/images/Home.png" />
                <Link to="/before"><button class="beforeBtn button">留学前</button></Link>
                <Link to="/while"><button class="whileBtn button">留学中</button></Link>
            </body>
        );
    }
}