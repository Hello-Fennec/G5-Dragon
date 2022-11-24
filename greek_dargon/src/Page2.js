import './Page2.css'
// import './Page2Nav'
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
// import Page2Nav from './Page2Nav';
import Page2Swipe from './Page2Swipe';

function Page2() {
    return (
        <div className="Page2">
            {/* <div> <Page2Nav/> </div> */}
            <div className="background" > </div>
            <div className="topic">
                <h1>MYTHICAL DRAGONS</h1>
            </div>
            <div className="เงาม่วง">
                <img className="เงาม่วง" src={เงาม่วง} alt="เงาม่วง" />
            </div>
            <div className="cloudtop">
                <img className="cloudtop" src={cloudtop} alt="cloudtop" />
            </div>
            <div className="ขาวกลม">
                <img className="ขาวกลม" src={ขาวกลม} alt="ขาวกลม" />
            </div>
            <div className="สายรุ้ง">
                <img className="สายรุ้ง" src={สายรุ้ง} alt="สายรุ้ง" />
            </div>
            <div className="ปราสาท">
                <img className="ปราสาท" src={ปราสาท} alt="ปราสาท" />
            </div>
            <div className="มังกร">
                <img className="มังกร" src={มังกร} alt="มังกร" />
            </div>
            <div className="cloud">
                <img className="cloud" src={cloud} alt="cloud" />
            </div>
            <div id='buttonHydra'>
                <a href="http://www.stackoverflow.com/"> {/*รอเชื่อมหน้า3*/}
                    <button id='buttontextHydra'>CLICK HERE<br />TO READ<br />ABOUT HYDRA<br /></button>
                </a>
            </div>
            <div className="gifdragon">
                <img className="gifdragon" src={gifdragon} alt="gifdragon" />
            </div>
            <div className="blinkทึบ1">
                <img className="blinkทึบ1" src={blinkทึบ1} alt="blinkทึบ1" />
            </div>
            <div className="blinkทึบ2">
                <img className="blinkทึบ2" src={blinkทึบ2} alt="blinkทึบ2" />
            </div>
            <div className="blinkใส">
                <img className="blinkใส" src={blinkใส} alt="blinkใส" />
            </div>
            <div className="blinkทึบ3">
                <img className="blinkทึบ3" src={blinkทึบ3} alt="blinkทึบ3" />
            </div>
            <Page2Swipe />

        </div>
    );
}
export default Page2;