import "./../styles/Energy.css";
import { ReactTyped } from "react-typed";

function Geothermal() {
  return (
    <div>
      <div className="geo-hero-banner">
        <h1>
          <ReactTyped
            className="react-typed"
            strings={["Geothermal Energy"]}
            typeSpeed={50}
            loop={false}
            showCursor={true}
          />
        </h1>
      </div>
    </div>
  );
}

export default Geothermal;
