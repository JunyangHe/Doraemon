import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const CustomePaper = styled(Paper)(({ theme }) => ({
    width: 300,
    height: 300,
    padding: theme.spacing(1),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default class BeforeAbroad extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="row" spacing={20}>
                <CustomePaper variant="outlined">出国前签证办理</CustomePaper>
                <CustomePaper variant="outlined">出国前体检及疫苗</CustomePaper>
                <CustomePaper variant="outlined">大学医疗保险购买</CustomePaper>

            </Stack>
        );
    }
}