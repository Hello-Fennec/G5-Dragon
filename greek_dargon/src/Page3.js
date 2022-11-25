import './Page3.css'
import './Page2Swipe'
import * as React from 'react';
import './App.css';
import bg from './image2/bg.png';
import bookleft from './image2/bookleft.png';
import bookright from './image2/bookright.png';
import dragon1 from './image2/dragon1.png';
import dragon2 from './image2/dragon2.png';
import dragon3 from './image2/dragon3.png';
import dragonblack from './image2/dragonblack.png';
import dragonblack2 from './image2/dragonblack2.png';
import Rectangle10 from './image2/Rectangle10.png';
import Rectangle11 from './image2/Rectangle11.png';
import Rectangle12 from './image2/Rectangle12.png';
import Rectangle13 from './image2/Rectangle13.png';
import Rectangle28 from './image2/Rectangle28.png';
import star from './image2/star.png';
import stone from './image2/stone.png';
import wave from './image2/wave.png';
import wave1 from './image2/wave1.png';
import white from './image2/white.png';


function Page3() {
    return(
    <div className="Page3">
        <div class="bg">
            <img className="bg" src={bg} alt="bg"/>
        </div>
        <div class="LERNAEANHYDRA">
            <p>LERNAEAN HYDRA</p>
        </div>
        <div class="thai1">
            <p>ลักษณะและอิทธิฤทธิ์ของไฮดรา</p>
        </div>

        <div className="bookright">
            <div data-aos="fade-left">
            <img className="bookright" src={bookright} alt="bookright"/>
            </div>
        </div>

        <div className="dragon1">
            <img className="dragon1" src={dragon1} alt="dragon1"/>
        </div>
        <div className="textdragon1">
            <div data-aos="fade-left"><p>มังกรไฮดรานี้ เป็นตำนานของชาวกรีก ตามที่เล่าขานกันมา คือบุตรแห่งอสุรกายไทฟอน-Typhon
                กับมารดาอสุรกายอิคิดนา-Echidna ตัวไฮดรามีร่างกายเป็นงูยักษ์หรือมังกร เริ่มตั้งแต่ห้าไปจนถึงร้อยหัวเลยทีเดียว
                แต่บางตำนานก็มี3หัวขึ้นไป
                ไม่มีอาวุธใดฆ่าได้ เพราะหัวแต่ละหัวเมื่อถูกตัดขาดไปจะงอก
                ขึ้นมาใหม่เพิ่มเป็นสองหัวทันที แถมแต่ละหัวยังมีความคิดเป็นของตัวเอง
                ลมหายใจและโลหิตเป็นพิษ
                อาศัยอยู่ในทะเลสาบเลอร์นา
            </p></div>
        </div>

        <div className="dragonblack">
            <div data-aos="fade-left">
            <img className="dragonblack" src={dragonblack} alt="dragonblack"/>
            </div>
        </div>

        <div className="white">
            <img className="white" src={white} alt="white"/>
        </div>

        <div className="dragon2">
            <img className="dragon2" src={dragon2} alt="dragon2"/>
        </div>

        <div className="thai2">
            <p>เรื่องราวในเทพนิยายกรีก</p>
        </div>

        <div className="bookleft">
            <div data-aos="fade-right">
            <img className="bookleft" src={bookleft} alt="bookleft"/>
            </div>
        </div>

        <div className="textdragon2">
            <div data-aos="fade-right"><p>ตำนานนั้นผู้ปราบไฮดราก็คือ
                เฮอร์คิวลิส (Hercules) ซึ่งปฏิบัติตามคำสั่งของยูริสเทียส
                ให้ไปปราบไฮดรา
                อสูรกาย 9 หัว
                (บางตำนานก็บอกว่ามีมากถึง 100 หัว หรืออาจมากกว่านั้น)
                และการที่ลมหายใจมีพิษที่ร้ายแรง เฮอร์คิวลิสจึงสูดลมหายใจเต็มปอดแล้ววิ่ง เข้าไปโดยเอากระบองฟาดใส่หัว
                ด้วยแรงอันมหาศาลทำให้หัวของไฮดรา
                ขาดลงมาหนึ่งหัวแต่หัวก็งอก
                ขึ้นมาใหม่ถึงสองหัว
                แต่ด้วยปัญญาอันชาญฉลาดของเฮอร์คิวลิส
                เมื่อตัดหัวของไฮดราได้แล้ว
                จึงได้ให้ไอโอลอส(ผู้ช่วยของเฮอร์คิวลิส)
                นำไฟไปลนที่คอของไฮดรา
                เพื่อไม่ให้มีหัวใหม่งอกออกมาได้ เมื่อสังหารไฮดราลงได้แล้ว เฮอร์คิวลิสได้เอาลูกธนูจุ่มเลือดของไฮดรา
                เพื่อใช้เป็นศรพิษอาวุธปราบอสูรกายตัวอื่นๆ
            </p></div>
        </div>

        <div className="dragonblack2">
            <div data-aos="fade-right">
            <img className="dragonblack2" src={dragonblack2} alt="dragonblack2"/>
            </div>
        </div>

        <div className="thai3">
            <p>กลุ่มดาวงูไฮดรา</p>
        </div>

        <div className="stone">
            <div data-aos="fade-down">
            <img className="stone" src={stone} alt="stone"/>
            </div>
        </div>

        <div className="textstone">
            <div data-aos="fade-down"><p>
                กลุ่มดาวงูไฮดรา เป็นกลุ่มดาวที่มีขนาดของพื้นที่ใหญ่ที่สุดบนท้องฟ้า
                มีความกว้างกว่า 100 องศา เป็นกลุ่มดาวที่ดาวฤกษ์ไม่สว่างมากนัก ยากแก่การมองให้เป็นรูปงูไฮดรา ยกเว้น ดาว
                Alphard ซึ่งเป็นดาวฤกษ์ ที่สว่างที่สุดในกลุ่มดาว และมีดาว 6 ดวง ที่เรียงกัน เป็นรูปส่วนหัวของงู
                อยู่ทางทิศตะวันออกของดาวโพรซิออน
                กลุ่มดาวงูไฮดราจะมองเห็นได้ดีที่สุดในเวลา 21.00 น. ของเดือนเมษายน
                กลุ่มดาวงูไฮดรา เป็นกลุ่มดาวที่มีขนาดใหญ่ที่สุดในบรรดากลุ่มดาว 88 กลุ่มที่รับรองโดยสหพันธ์ดาราศาสตร์สากล
                และเป็นหนึ่งในกลุ่มดาว 48 กลุ่มที่อยู่ในรายการของทอเลมี
            </p></div>
        </div>

        <div className="star">
            <div data-aos="fade-down">
            <img className="star" src={star} alt="star"/>
            </div>
        </div>

        <div className="dragon3">
            <img className="dragon3" src={dragon3} alt="dragon3"/>
        </div>

        <div>
            <div className="wave"> 
                <img className="wave" src={wave} alt="wave"/>
            </div>

            <div className="wave1">
                <img className="wave1" src={wave1} alt="wave1"/>
            </div>
            {/* <!-- ทำให้น้ำขยับได้ --> */}

            <div className="GALLERY">
                <p>GALLERY OF LERNAEAN HYDRA</p>
            </div>
            {/* <!-- รูปเลื่อนได้5รูป รูปregtangle1-5 --> */}

            <div className="ABOUTUS">
                <p>ABOUT US </p>
                {/* <!-- เชื่อมปุ่มไปหน้า4 --> */}
            </div>
        </div>
</div>
    );
}

export default Page3;

{/* <!-- importเข้าปุ่มpage2 --> */}
{/* เชื่อมทุกหน้าเข้ากัน */}