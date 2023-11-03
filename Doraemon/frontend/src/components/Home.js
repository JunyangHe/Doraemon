import React, { Component } from "react";
import BeforeAbroad from "./BeforeAbroad";
import WhileAbroad from "./WhileAbroad";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@mui/material/Box";
import Image from "mui-image";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            
            }}>
                <Button variant="contained" color="primary">留学前</Button>

                <Image
                    src="../static/images/Home.png"
                />
            </Box>
        );
    }
}
