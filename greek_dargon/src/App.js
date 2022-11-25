import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './Header';
import MN from './MN';
import NT from './NT';
import HomePage from './HomePage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'




function App() {
  return (
    <div>

      <DrawerAppBar />
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ }}>
    < HomePage/>
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
     
    }}>
    <MN/>
  </ParallaxLayer>
</Parallax>



    </div>
  );
}

export default App;
