import * as React from 'react';
import "./App.css";
import "./homepage.css";
import dargon from './assets/dargonImg1.png';
import './homepage.css';
import moon from './assets/moon.png'
import could from './assets/could/could.png'
import { Button } from "@mui/material";


function NT() {
    return (

        <div class='night'>
            <img class='could' src={could}  ></img>
            <div class='stars'></div>
            <img class='moon' src={moon} alt='moon' ></img>
            <div class="dragonImg">
                <p class="text1HomePage">LERNAEAN HYDRA</p>
            </div>
            {/*  edited  */}
            <div class="buttonStart">
                <Button>
                    <p class="buttontextStart">START!</p>
                </Button>
            </div>
            {/*  edited  */}
        </div>
    );


}
export default NT;