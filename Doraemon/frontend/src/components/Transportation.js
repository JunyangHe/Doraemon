import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";


export default class Transportation extends Component {
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
                <h1 class="title">交通相关</h1>
                <h2 class="title">Transportation</h2>
                <Stack direction = "row" spacing="10vw" mt="16vh" flexWrap="wrap" useFlexGap justifyContent="center" >
                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/公共交通（巴士、地铁）指南.png" />
                        </div>
                        <p class="text">公共交通 (巴士、地铁) 指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/打车、网约车指南.png" />
                        </div>
                        <p class="text">打车、网约车指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/考取美国驾照指南.png" />
                        </div>
                        <p class="text">考取美国驾照指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/买车指南.png" />
                        </div>
                        <p class="text">买车指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/车辆保险、保养指南.png" />
                        </div>
                        <p class="text">车辆保险、保养指南</p>
                        <div class="stage2">
                            <Link to="/"><button class="stage2btn button">点击查看</button></Link>
                        </div>
                    </div>

                    <div class="circle">
                        <div class="icon">
                            <img class="icon" src="../static/icons/租车指南.png" />
                        </div>
                        <p class="text">租车指南</p>
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