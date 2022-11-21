import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import './homepage.css';
import moon from './assets/moon.png'
import could from './assets/could/could.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function NT() {
    return (

        <div class='night'>
            <img class='could' src={could}  ></img>
            <div class='stars'></div>
            <img class='moon' src={moon} alt='moon' ></img>
        </div>
    );


}
export default NT;