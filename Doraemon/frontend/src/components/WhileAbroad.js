import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';

export default class WhileAbroad extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer 
                PaperProps={{
                    sx: {
                    backgroundColor: "#0275FF"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <Stack direction = "row" spacing="5vw" ml="10vw" mr="10vw" mt="15vh" flexWrap="wrap" useFlexGap >

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>交流及社交相关</h1>
                        <h2>Communication</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">电话卡以及流量办理事宜</li>
                            <li class="asterisk">美国社交媒体介绍及推荐</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                        </ul>
                        
                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>交通相关</h1>
                        <h2>Transportation</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">公共交通(地铁、巴士)指南</li>
                            <li class="asterisk">打车、网约车指南</li>
                            <li class="asterisk">考取美国驾照指南</li>
                            <li class="asterisk">买车指南</li>
                            <li class="asterisk">车辆保险及保养指南</li>
                            <li class="asterisk">租车指南</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                        </ul>

                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>财务相关</h1>
                        <h2>Money and Finance</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">美国银行开户指南</li>
                            <li class="asterisk">中美汇款(学费/生活费)指南</li>
                            <li class="asterisk">日常转账指南</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                            
                        </ul>
                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>学习/工作相关</h1>
                        <h2>Study and Work</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">大学课程选课指南</li>
                            <li class="asterisk">学习辅助工具/网站指南</li>
                            <li class="asterisk">找工作/实习指南</li>
                            <li class="asterisk">学生办理SSN指南</li>
                            <li class="asterisk">学生报税指南</li>
                            <li class="asterisk">学生工作身份指南</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                        </ul>
                        
                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>饮食和住宿</h1>
                        <h2>Dining and Accommodation</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">外卖指南</li>
                            <li class="asterisk">线上中国超市推荐</li>
                            <li class="asterisk">线下中国超市推荐</li>
                            <li class="asterisk">美国租房指南</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li class="stage2">
                                <button class="stage2btn button">点击查看</button>
                            </li>
                        </ul>

                    </Paper>

                    <Paper elevation={16} square sx={{width: 400, height: 600}}>
                        <h2>&nbsp;</h2>
                        <h1>娱乐休闲</h1>
                        <h2>Entertainment and Leisure</h2>
                        <h3>&nbsp;</h3>
                        <ul>
                            <li class="asterisk">美国购物指南</li>
                            <li class="asterisk">旅行指南</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
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