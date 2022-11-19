import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import nt from './assets/night.png'
import moon from './assets/moon.png'
import c1 from './assets/could/CLay1.png'
import c2 from './assets/could/c2.png'
import c3 from './assets/could/c3.png'



function Homepage() {
    return (

        <div >

            <div >
                <img id='ntSky' src={nt} alt='ntSky' ></img>
                <div id='stars'></div>

                <img id='moon' src={moon} alt='moon' ></img>



            </div>
            <img id='dragonImg' src={dargon} alt='dargon1' ></img>



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

        </div>
    );


}
export default Homepage;