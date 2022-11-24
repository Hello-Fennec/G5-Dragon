import * as React from 'react';
import './mme.css';
import dragon from './image/dragon.gif'
import dragon2 from './image/dragon1.gif'
import cloud from './image/cloud.png'


function Mee() {
  return (
    <div className="page">
      <nav>
        <ul className="main">
          <div className="logo">
            <a href>GREEK </a>
          </div>
          <div className="logo2">
            <a href>MYTHOLOGY</a>
          </div>
          <li><a href="/index.html">MYTHICAL<br /> DRAGONS</a></li>
          <li><a href="/aboutme.html">LERNAEAN <br />HYDRA</a></li>
          <li><a href="/diary.html">ABOUT<br />US</a></li>
        </ul>
      </nav>
      <div className="card" style={{ width: '50%' }}>
        <a href="https://www.instagram.com/akkarawit_title/" target="_blank">
          <div className="box1">
            <h2>TITLE</h2>
          </div>
        </a>
        <a href="https://www.instagram.com/botusvyvie/" target="_blank">
          <div className="box2">
            <h2>BOTUS</h2>
          </div>
        </a>
        <a href="https://www.instagram.com/peacebluegirl/" target="_blank">
          <div className="box3">
            <h2>PEACE</h2>
          </div>
        </a>
        <a href="https://www.instagram.com/kayjirat_s/" target="_blank">
          <div className="box4">
            <h2>KAY</h2>
          </div>
        </a>
        <a href="https://www.instagram.com/fluke.wm47/" target="_blank">
          <div className="box5">
            <h2>FLUKE</h2>
          </div>
        </a>
        <a href="https://www.instagram.com/nalinee.mm/" target="_blank">
          <div className="box6">
            <h2>MEMEE</h2>
          </div>
        </a>
      </div>
      <div className="INFRASTRUCTURE">INFRASTRUCTURE</div>
      <div className="WEBDESIGN">WEB DESIGN</div>
      <div className="FRONT-END">FRONT-END</div>

      <div className="background-wrap">
        <div className="x1">
          <div className="cloud"> <img src={cloud} width="3990" height="2878" /></div>
        </div>
      </div>

      <div className="dragon">
        <div className="dragon1">
          <img src={dragon} />
        </div>
        <div className="dragon2">
          <img src={dragon2} />
        </div>
      </div>
    </div>
  );

}
export default Mee;