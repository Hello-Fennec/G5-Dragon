import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import moon from './assets/moon.png'
import bd from './assets/morning/bird.png'
import fire from './assets/morning/fireright.png'
import fire2 from './assets/morning/fireleft.png'
import stone1 from './assets/morning/stone1.png'
import stone2 from './assets/morning/stone2.png'
import sunlight from './assets/morning/sunlight.png'
import morning from './assets/morning/morning.png'

import './homepage.css';

function Homepage2() {
    return (
        <div class='homePage'>
            <div class='morning'>
                <img class='sunlight' src={sunlight} alt='sunlight' ></img>
                <div class='could' ></div>
                <img class='bird' src={bd} alt='bird' ></img>
                <img class='fireright' src={fire} alt='fireright' ></img>
                <img class='fireleft' src={fire2} alt='fireright' ></img>

                <img class='stone1' src={stone1} alt='stone1' ></img>
                <img class='stone2' src={stone2} alt='stone2' ></img>
            </div>


            <div class='dragonImg'>
                <p class='text1HomePage'>LERNAEAN HYDRA</p>
            </div>
            <div class='buttonStart'>
                <p class='buttontextStart'>START!</p>
            </div>
        </div>
    );


}
export default Homepage2;