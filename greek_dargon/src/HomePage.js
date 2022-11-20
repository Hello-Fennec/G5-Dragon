import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import nt from './assets/night.png'
import moon from './assets/moon.png'
import could from './assets/could/could.png'
import c2 from './assets/could/c2.png'
import c3 from './assets/could/c3.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Homepage() {
    return (
        <div >

            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <div class='containner'>
                        <img class='could' src={could} alt='dargon1' ></img>
                        <div class='stars'></div>

                        <img class='moon' src={moon} alt='moon' ></img>
                        <img class='dragonImg' src={dargon} alt='dargon1' ></img>
                        <p class='text1HomePage'>LERNAEAN HYDRA</p>

                        <div class='buttonStart'>
                            <p class='buttontextStart'>START!</p>
                        </div>
                    </div>




                </ParallaxLayer>
            </Parallax>

        </div>
    );


}
export default Homepage;