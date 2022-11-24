import * as React from 'react';
import './App.css';
import './Page2Swipe.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Page2Swipe() {
  return (
    <div className="Swipe">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='slide'><span>
          มังกร (อังกฤษ: dragon; จากละติน: draco) <br />
          เป็นสัตว์วิเศษที่รู้จักกันในวรรณคดีของจีนและตะวันตก<br />
          แม้จะใช้คำว่ามังกร (dragon) เหมือนกัน<br />
          แต่มังกรของจีนและตะวันตกนั้นสื่อถึงสัตว์ต่างชนิดกัน<br />
        </span></SwiperSlide>

        <SwiperSlide><span>
          มังกรของจีนมีรูปร่างลักษณะจัดอยู่ในประเภทสัตว์เลื้อยคลาน<br />
          หรืองู ไม่มีปีก แต่สามารถบินไปในอากาศได้ <br />
          ส่วนมังกรของตะวันตกจะมีขา มีปีกและสามารถพ่นไฟได้ <br />
          ในตำนานยุโรป มังกรเป็นสัตว์อันตรายและน่าสะพรึงกลัวสำหรับมนุษย์ <br />
          มังกรจึงเป็นศัตรูตัวฉกาจของเหล่าวีรบุรุษทั้งหลาย <br />
        </span></SwiperSlide>

        <SwiperSlide><span>
          การฆ่ามังกรและขึ้นเถลิงราชย์เป็นกษัตริย์ <br />
          มังกรจึงกลายเป็นสัญลักษณ์ของกษัตริย์  <br />
          ทั้งที่มีตัวตนจริง ๆและในตำนานต่าง ๆ เช่น กษัตริย์อาเธอร์ <br />
          ซึ่งมีนามสกุลว่า Pendragon<br />
        </span></SwiperSlide>

        <SwiperSlide><span>
        <br />
          มีความหมายว่า 'ศีรษะของมังกร' หรือ 'หัวหน้ามังกร'<br />
          และมงกุฎของกษัตริย์อาเธอร์ ก็เป็นรูปมังกร<br />
        </span></SwiperSlide>
        ...
      </Swiper>
    </div>
  );

}
export default Page2Swipe;

