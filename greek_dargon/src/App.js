import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './Header';
import MN from './MN';
import NT from './NT';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>

      {/* <DrawerAppBar />
      < HomePage/> */}
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          
          <Route index element={<HomePage />} />
          <Route path="About" element={<MN />} />
          <Route path="Page3" element={<NT />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
