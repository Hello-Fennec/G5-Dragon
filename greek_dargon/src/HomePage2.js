import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import moon from './assets/moon.png'
import could from './assets/could/could.png'
import fire from './assets/morning/fireright.png'
import stone from './assets/morning/stone.png'
import sunlight from './assets/morning/sunlight.png'
import morning from './assets/morning/morning.png'


import './homepage.css';

function Homepage2() {
    return (

        <div>
            <div class='morning'>  </div>

            <img class='sunlight' src={sunlight}></img>
            <img class='fireright' src={fire}></img>
            <img class='fireleft' src={fire}></img>
            <div class='dragonImg'>
                <p class='text1HomePage'>LERNAEAN HYDRA</p>
            </div>
            <img class='stone' src={stone}></img>





        </div>
    );


}
export default Homepage2;