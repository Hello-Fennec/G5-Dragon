import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import nt from './assets/night.png'
import moon from './assets/moon.png'
import c1 from './assets/could/c1.png'
import c2 from './assets/could/c2.png'
import c3 from './assets/could/c3.png'
import c4 from './assets/could/c4.png'
import c5 from './assets/could/c5.png'
import c6 from './assets/could/c6.png'
import c7 from './assets/could/c7.png'

function Homepage() {
    return (
        <div >
            <div >
                <img id='ntSky' src={nt} alt='ntSky' ></img>
                <div id='stars'></div>
                <img id='moon' src={moon} alt='moon' ></img>

                <img id='c7' src={c7} ></img>
                <img id='c6' src={c6} ></img>
                <img id='c5' src={c5} ></img>
                <img id='c4' src={c4} ></img>
                <img id='c3' src={c3} ></img>
                <img id='c2' src={c2} ></img>
                <img id='c1' src={c1} ></img>

            </div>
            <img id='dragonImg' src={dargon} alt='dargon1' ></img>




            <div  >
                <p id='text1HomePage'>LERNAEAN HYDRA</p>
            </div>
            <div id='buttonStart'>
                <p id='buttontextStart'>START!</p>
            </div>
        </div>
    );


}
export default Homepage;