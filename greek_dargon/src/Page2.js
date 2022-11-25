import './Page2.css'
import './DrawerAppBar'
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
import DrawerAppBar from './DrawerAppBar';
import Page2Swipe from './Page2Swipe';
import { Button } from '@mui/material';

function Page2() {
    return (
        <div className="Page2">
            <Button id='buttonHydra'>
                <a href="http://www.stackoverflow.com/"> {/*รอเชื่อมหน้า3*/}
                    <p id='buttontextHydra'>CLICK HERE<br />TO READ<br />ABOUT HYDRA<br /></p>
                </a>
            </Button>
            <Page2Swipe />
            <div> <DrawerAppBar/> </div>
            <div className = "background" ><div class='bgg2'></div>
            <div className="topic">
                <h1>MYTHICAL DRAGONS</h1>
            </div>
            <div className="มังกร">
                <img className="มังกร" src={มังกร} alt="มังกร" />
</div>
            <div className="gifdragon">
                <img className="gifdragon" src={gifdragon} alt="gifdragon" />
            </div>
            
            
            
            </div>
        </div>
    );
}
export default Page2;