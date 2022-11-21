import * as React from 'react';
import './App.css';
import './homepage.css';
import Mor from './MN';
import Nt from './NT';
import { Button } from '@mui/material';
let m = <Nt />;

function HomrPageReal() {
    return (
        <div class='homePage'>
            <Nt />
            <div class='dragonImg'>
                <p class='text1HomePage'>LERNAEAN HYDRA</p>
            </div>

            <div class='buttonStart'>
                <Button><p class='buttontextStart'>START!</p></Button>
            </div>

        </div>
    );


}
export default HomrPageReal;