import './Page2.css'
import './Page2Swipe'
import * as React from 'react';
import './App.css';
import gifdragon from './p2/gifdragon.GIF';
import cloud from './p2/cloud.png';
import เงาม่วง from './p2/เงาม่วง.png';
import ขาวกลม from './p2/ขาวกลม.png';
import สายรุ้ง from './p2/สายรุ้ง.png';
import มังกร from './p2/มังกร.png';
import blinkทึบ1 from './p2/blinkทึบ1.png';
import blinkทึบ2 from './p2/blinkทึบ2.png';
import blinkใส from './p2/blinkใส.png';
import blinkทึบ3 from './p2/blinkทึบ3.png';
import cloudtop from './p2/cloudtop.png';
import ปราสาท from './p2/ปราสาท.png';
import Page2Swipe from './Page2Swipe';
import { Button } from '@mui/material';
import DrawerAppBar from './Header';
import {Outlet,Link} from "react-router-dom"

function Page2() {
    return (
        <div className="Page2">
             <Link to={`page3`}><Button id='buttonHydra'>
            <div className="gifdragon">
                <img className="gifdragon" src={gifdragon} alt="gifdragon" />
            </div>
        
                    <p id='buttontextHydra'>CLICK HERE<br />TO READ<br />ABOUT HYDRA<br /></p>
                     </Button></Link>
            <Page2Swipe />
            <div> <DrawerAppBar/> </div>
            <div className = "background" ><div class='bgg2'></div>
            <div className="topic">
                <h1>MYTHICAL DRAGONS</h1>
            </div>
            <div className="มังกร">
                <img className="มังกร" src={มังกร} alt="มังกร" />
</div>
            
            
            
            
            </div>
            <Outlet/>
        </div>
    );
}
export default Page2;