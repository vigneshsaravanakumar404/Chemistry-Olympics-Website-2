import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
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
        <p></p>

        <div class="energy-container">
          <img
            src="https://i.pinimg.com/originals/69/34/25/6934254c5c77fac61fa1150c080701f3.png"
            alt="Solar Energy"
            class="energy-image"
          ></img>
          <div class="energy-details">
            <h2 class="energy-title">Solar Energy</h2>
            <p class="energy-description">
              Solar energy is renewable energy derived from the sun's rays. It
              is a clean and sustainable source of power.
            </p>
            <a href="/solar" class="energy-button">
              Solar
            </a>
          </div>
        </div>

        <div class="energy-container">
          <img
            src="https://think.ing.com/uploads/hero/_w800h450/170521-image-bio_energy_with_caption.jpg"
            alt="Bio Energy"
            class="energy-image"
          ></img>
          <div class="energy-details">
            <h2 class="energy-title">Bio Energy</h2>
            <p class="energy-description">
              Bio energy is energy derived from organic materials, such as
              plants and animal waste. It is a versatile and renewable energy
              source.
            </p>
            <a href="/bio" class="energy-button">
              Bio
            </a>
          </div>
        </div>

        <div class="energy-container">
          <img
            src="https://energytransition.org/wp-content/uploads/2023/03/Krafla_geothermal_power_station_wiki.jpg"
            alt="Geothermal Energy"
            class="energy-image"
          ></img>
          <div class="energy-details">
            <h2 class="energy-title">Geothermal Energy</h2>
            <p class="energy-description">
              Geothermal energy is heat derived from the Earth's core. It is a
              sustainable and reliable source of power.
            </p>
            <a href="/geothermal" class="energy-button">
              Geothermal
            </a>
          </div>
        </div>
        <p> </p>
      </div>
    </div>
  );
}

export default Home;
