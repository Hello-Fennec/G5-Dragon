import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';

import moon from './assets/moon.png'
import could from './assets/could/could.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Homepage2 from './HomePage2';


function Homepage() {
    return (
        <div >
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                >

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
                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{}}>
                    <Homepage2 />
                </ParallaxLayer>
            </Parallax>

        </div>
    );


}
export default Homepage;