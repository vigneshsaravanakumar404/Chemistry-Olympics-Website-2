import "./../styles/Energy.css";
import { ReactTyped } from "react-typed";

function Bio() {
  return (
    <div>
      <div className="bio-hero-banner">
        <h1>
          <ReactTyped
            className="react-typed"
            strings={["Bio Energy"]}
            typeSpeed={50}
            loop={false}
            showCursor={true}
          />
        </h1>
      </div>
    </div>
  );
}

export default Bio;
