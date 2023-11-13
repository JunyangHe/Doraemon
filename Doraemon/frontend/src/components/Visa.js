import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

export default class Visa extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction = "row" spacing = "25vw" ml="15vw" mt="15vh" flexWrap="wrap" useFlexGap >
                <Paper elevation={16} square sx={{width: 400, height: 600}}>1</Paper>
                <Paper elevation={16} square sx={{width: 400, height: 600}}>2</Paper>
            </Stack>
        );
    }
}