import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import nt from './assets/night.png'
import moon from './assets/moon.png'
import c1 from './assets/could/CLay1.png'
import c2 from './assets/could/CLay2.png'
import c3 from './assets/could/CLay3.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Homepage2() {
    return (
        <div>

            <div class='containner'>
                <div class='stars'></div>
                <img class='moon' src={moon} alt='moon' ></img>
                <img class='dragonImg' src={dargon} alt='dargon1' ></img>
                <p class='text1HomePage'>LERNAEAN HYDRA</p>
                <div class='buttonStart'></div>
                <p class='buttontextStart'>START!</p>
                <img class='CLay1' src={c1} alt='dargon1' ></img>
                <img class='CLay2' src={c2} alt='dargon1' ></img>
                <img class='CLay3' src={c3} alt='dargon1' ></img>



            </div >
        </div>
    );


}
export default Homepage2;