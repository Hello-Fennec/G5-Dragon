
import React, { useState, useEffect } from "react";
import "./App.css";
import "./homepage.css";
import Mor from "./MN";
import Nt from "./NT";
import { Button } from "@mui/material";
let m = <Nt />;

function HomrPageReal() {
    const [toggle, setToggle] = useState(true);
    const toggleChecked = () => setToggle((toggle) => !toggle);

    useEffect(() => {
        const interval = setInterval(() => {
            toggleChecked(toggle => !toggle);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div class="homePage">
            {toggle && <Nt />}
            {!toggle && <Mor />}

            <div class="dragonImg">
                <p class="text1HomePage">LERNAEAN HYDRA</p>
                <div class='buttonStart'>
                    <p class='buttontextStart'>START!</p>
                </div>

            </div>


        </div>
    );
}
export default HomrPageReal;