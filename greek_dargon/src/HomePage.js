import * as React from 'react';
import './App.css';
import dargon from './assets/dargonImg1.png';
import { Button } from '@mui/material';


function Homepage() {
    return (
        <div className='' >
            <div >
                <img id='dragonImg' src={dargon} alt='dargon1' ></img>
                <Button href="#text-buttons">Link</Button>
                <div  >
                    <p id='text1HomePage'>LERNAEAN HYDRA</p>
                </div>
                <div id='buttonStart'>
                    <p id='buttontextStart'>START!</p>
                </div>
            </div>
        </div >
    );


}
export default Homepage;