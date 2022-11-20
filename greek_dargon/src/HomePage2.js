import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import moon from './assets/moon.png'
import could from './assets/could/could.png'


function Homepage2() {
    return (
        <div>
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

        </div >
    );


}
export default Homepage2;