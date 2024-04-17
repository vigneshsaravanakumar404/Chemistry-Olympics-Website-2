import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import SolarImage from "./../images/Solar.png";
import BioImage from "./../images/Bio.png";
import GeothermalImage from "./../images/Geothemral.png";
import "./../styles/Home.css";

function Home() {
  return (
    <div>
      <h1 id="home-title">
        <ReactTyped
          strings={["Alternate\nEnergy"]}
          typeSpeed={50}
          loop={false}
          showCursor={true}
        />
      </h1>
      <div id="home-hero-background" />
      <div id="home-content">
        <div id="home-carousel">
          <div class="home-carousel-card"></div>
        </div>
        <h1 class="home-header">Some Statistics</h1>
        <p class="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat
          diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas
          quis urna vel erat dictum imperdiet. Cras luctus vitae arcu
          pellentesque efficitur. Cras urna tellus, blandit ut ornare id,
          venenatis non sem. Phasellus nec eros imperdiet odio suscipit
          scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt
          condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia
          neque turpis, luctus laoreet nibh interdum ac.
        </p>
        <h2 class="home-subheader">Lorem Ipsum</h2>
        <p class="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat
          diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas
          quis urna vel erat dictum imperdiet. Cras luctus vitae arcu
          pellentesque efficitur. Cras urna tellus, blandit ut ornare id,
          venenatis non sem. Phasellus nec eros imperdiet odio suscipit
          scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt
          condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia
          neque turpis, luctus laoreet nibh interdum ac.
        </p>
        <h2 class="home-subheader">Lorem Ipsum</h2>
        <p class="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat
          diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas
          quis urna vel erat dictum imperdiet. Cras luctus vitae arcu
          pellentesque efficitur. Cras urna tellus, blandit ut ornare id,
          venenatis non sem. Phasellus nec eros imperdiet odio suscipit
          scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt
          condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia
          neque turpis, luctus laoreet nibh interdum ac.
        </p>
        <div id="home-graph" />
        <h1 class="home-header">Energy Comes in Many Forms</h1>
        <br />

        {/*TODO: CHANGE IMAGES TO FIT WITH WEBSITE THEME */}
        {/*TODO: Fix for small devices */}
        <div class="energy-container">
          <img src={SolarImage} alt="Solar Energy" class="energy-image"></img>
          <div class="energy-details">
            <h2 class="energy-title">Solar Energy</h2>
            <p class="energy-description">
              Solar energy is renewable energy derived from the sun's rays. It
              is a clean and sustainable source of power.
            </p>
            <Link to="/solar" class="energy-button">
              Solar
            </Link>
          </div>
        </div>

        <div class="energy-container">
          <img src={BioImage} alt="Bio Energy" class="energy-image" />
          <div class="energy-details">
            <h2 class="energy-title">Bio Energy</h2>
            <p class="energy-description">
              Bio energy is energy derived from organic materials, such as
              plants and animal waste. It is a versatile and renewable energy
              source.
            </p>
            <Link to="/bio" class="energy-button">
              Bio
            </Link>
          </div>
        </div>

        <div class="energy-container">
          <img
            src={GeothermalImage}
            alt="Geothermal Energy"
            class="energy-image"
          />
          <div class="energy-details">
            <h2 class="energy-title">Geothermal Energy</h2>
            <p class="energy-description">
              Geothermal energy is heat derived from the Earth's core. It is a
              sustainable and reliable source of power.
            </p>
            <Link to="/geothermal" class="energy-button">
              Geothermal
            </Link>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;
