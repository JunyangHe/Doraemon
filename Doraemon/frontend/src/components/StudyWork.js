import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";


export default class StudyWork extends Component {
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
                <h1 class="title">学习/工作相关</h1>
                <h2 class="title">Study and Work</h2>
                <Stack direction = "row" spacing="10vw" mt="16vh" flexWrap="wrap" useFlexGap justifyContent="center" >
                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/大学课程选课指南.png" />
                        </div>
                        <p class="text">大学课程选课指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/网站指南.png" />
                        </div>
                        <p class="text">学习辅助工具/网站指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/实习指南.png" />
                        </div>
                        <p class="text">找工作/实习指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/学生办理SSN指南.png" />
                        </div>
                        <p class="text">学生办理SSN指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/学生报税指南.png" />
                        </div>
                        <p class="text">学生报税指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/学生工作身份指南.png" />
                        </div>
                        <p class="text">学生工作身份指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>
                    
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