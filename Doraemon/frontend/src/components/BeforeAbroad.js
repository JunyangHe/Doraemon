import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';


export default class BeforeAbroad extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer 
                PaperProps={{
                    sx: {
                        width: "100vw",
                        backgroundColor: "#0275FF"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <Stack direction = "row" spacing="5vw" ml="10vw" mt="15vh" flexWrap="wrap" useFlexGap >

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>出国前F1签证办理</h1>
                        <h2>F1 Student Visa</h2>
                        <h1>&nbsp;</h1>
                        <ul>
                            <li class="asterisk">F1签证在出国前须办理完成</li>
                            <li class="asterisk">详细记录预约及办理签证流程</li>
                            <li class="asterisk">详细罗列办理签证所需材料</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <Link to="/visa"><button class="stage2btn button">点击查看</button></Link>
                            </li>
                        </ul>
                        
                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>出国前体检及疫苗</h1>
                        <h2>Physical Exam / Vaccination</h2>
                        <h1>&nbsp;</h1>
                        <ul>
                            <li class="asterisk">体检和疫苗在出国前须完成</li>
                            <li class="asterisk">详细记录出国体检预约及流程</li>
                            <li class="asterisk">详细罗列办理体检所需材料</li>
                            <li class="asterisk">详细罗列出国所需疫苗</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                        </ul>

                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>大学医疗保险购买</h1>
                        <h2>Health Insurance</h2>
                        <h1>&nbsp;</h1>
                        <ul>
                            <li class="asterisk">美国大学要求学生购买医疗保险</li>
                            <li class="asterisk">详细讲解美国保险功能</li>
                            <li class="asterisk">罗列面向中国学生的保险公司</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                            
                        </ul>
                    </Paper>

                </Stack>
                <div class="empty-space">
                    <Link to="/">
                    <button class="image-btn">
                        <img class="button" src="../static/images/Home.png" />
                    </button>
                    </Link>
                </div>
            </Drawer>

        );
    }
}