import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Solar from "./pages/Solar.js";
import Bio from "./pages/Bio.js";
import Geothermal from "./pages/Geothermal.js";
import InteractiveMap from "./pages/InteractiveMap.js";
import Citations from "./pages/Citations.js";
import Error from "./pages/Error.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solar" element={<Solar />} />
          <Route path="bio" element={<Bio />} />
          <Route path="geothermal" element={<Geothermal />} />
          <Route path="map" element={<InteractiveMap />} />
          <Route path="citations" element={<Citations />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
