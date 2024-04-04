import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Solar from './pages/Solar.js';
import Bio from './pages/Bio.js';
import Geothermal from './pages/Geothermal.js';
import Map from './pages/Map.js';
import Error from './pages/Error.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='solar' element={<Solar/>}/>
          <Route path='bio' element={<Bio/>}/>
          <Route path='geothermal' element={<Geothermal/>}/>
          <Route path='map' element={<Map/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
