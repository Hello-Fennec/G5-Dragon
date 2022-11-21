import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import './homepage.css';
import moon from './assets/moon.png'
import could from './assets/could/could.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Homepage2 from './HomePage2';


function Homepage() {
    return (
        <div class='homePage'>

            <div class='night'>
                <img class='could' src={could} alt='dargon1' ></img>
                <div class='stars'></div>

                <img class='moon' src={moon} alt='moon' ></img>
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
export default Homepage;