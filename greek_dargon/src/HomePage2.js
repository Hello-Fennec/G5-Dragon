import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import nt from './assets/night.png'
import moon from './assets/moon.png'
import c1 from './assets/could/CLay1.png'
import c2 from './assets/could/c2.png'
import c3 from './assets/could/c3.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Homepage2() {
    return (
        <div >
            <Parallax pages={2} style={{ height: '9', top: '0', left: '0' }}>
                <ParallaxLayer
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div >
                        <img id='ntSky' src={nt} alt='ntSky' ></img>
                        <div id='stars'></div>

                        <img id='moon' src={moon} alt='moon' ></img>

                    </div>
                    <center><img id='dragonImg' src={dargon} alt='dargon1' ></img></center>



                    <div id='CLay4'></div>
                    <div id='CLay3'></div>
                    <div id='CLay2'></div>
                    <div id='CLay1'></div>
                    <div  >
                        <p id='text1HomePage'>LERNAEAN HYDRA</p>
                    </div>
                    <div id='buttonStart'>
                        <p id='buttontextStart'>START!</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );


}
export default Homepage2;