import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";


export default class Insurance extends Component {
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
                <h1 class="title">大学医疗保险购买</h1>
                <h2 class="title">Health Insurance</h2>
                <Stack direction = "row" spacing="10vw" mt="16vh" flexWrap="wrap" useFlexGap justifyContent="center" >
                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/美国保险功能.png" />
                        </div>
                        <p class="text">美国保险功能</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/用第三方保险waive大学保险.png" />
                        </div>
                        <p class="text">用第三方保险waive大学保险</p>
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