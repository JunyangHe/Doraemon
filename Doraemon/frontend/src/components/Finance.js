import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";


export default class Finance extends Component {
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
                <h1 class="title">财务相关</h1>
                <h2 class="title">Money and Finance</h2>
                <Stack direction = "row" spacing="10vw" mt="16vh" flexWrap="wrap" useFlexGap justifyContent="center" >
                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/美国银行开户指南.png" />
                        </div>
                        <p class="text">美国银行开户指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/中美汇款.png" />
                        </div>
                        <p class="text">中美汇款 (学费/生活费) 指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/日常转账指南.png" />
                        </div>
                        <p class="text">日常转账指南</p>
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