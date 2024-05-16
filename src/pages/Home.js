import { ReactTyped } from "react-typed";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Map from './../images/map.gif';
import "./../styles/Home.css";

function EnergyCard(props) {
  let card = "home-carousel-card";
  if (props.current === props.index) {
    card += " home-carousel-card-center";
    if (props.scrollDirection === "left") {
      card += " home-carousel-card-center-left";
    } else if (props.scrollDirection === "right") {
      card += " home-carousel-card-center-right";
    }
  } else if (props.current > props.index) {
    card += " home-carousel-card-left";
  } else if (props.current < props.index) {
    card += " home-carousel-card-right";
  }
  if (Math.abs(props.current - props.index) > 1) {
    card += " home-carousel-card-invisible";
  }

  return (
    <div
      class={card}
      onClick={() => {
        if (props.current < props.index) {
          props.setScrollDirection("left");
          props.setCard(props.index);
        } else if (props.current > props.index) {
          props.setScrollDirection("right");
          props.setCard(props.index);
        }
      }}
    >
      <p class="home-carousel-card-title">{props.title}</p>
      <img class="home-carousel-card-image" src={props.image} alt='' />
      <p class="home-carousel-card-header">Description:</p>
      <p class="home-carousel-card-text">{props.description}</p>
      <p class="home-carousel-card-header">
        Percent of Total Energy Consumption:
      </p>
      <p class="home-carousel-card-text">{props.percent}</p>
      <p class="home-carousel-card-header">Cost per Kilowatt-Hour:</p>
      <p class="home-carousel-card-text">{props.cost}</p>
    </div>
  );
}

function Home() {
  const [card, setCard] = useState(5);
  const [scrollDirection, setScrollDirection] = useState('');

  const cards = [
    <EnergyCard
      current={card}
      index={5}
      title="SOLAR ENERGY"
      description="Solar energy is perhaps the most well-known form of renewable energy. It is the conversion of sunlight into electricity. Solar panels are used to capture the sun's energy and convert it into electricity. This energy can be used to power homes, businesses, and even cars. Solar energy is a clean and renewable source of energy that can help reduce our dependence on fossil fuels. 342 watts of solar energy fall upon every square meter of Earth. This is a tremendous amount of energy—44 quadrillion watts of power to be exact. As a comparison, a large electric power plant produces about 1 billion watts of power. It would take 44 million such power plants to equal the energy coming from the Sun."
      percent="1.44%"
      cost="4.00¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/b1f17e04e8b270a89cebf126be2e47c2776b8856/pexels-pixabay-371900.jpg'
    />,
    <EnergyCard
      current={card}
      index={4}
      title="WIND ENERGY"
      description="Wind energy is a form of energy that captures the kinetic energy in the motion of air molecules. Wind turbines are used to convert this energy into electricity. Wind originates from the uneven heating of the Earth's surface by the sun, making wind energy also a form of solar energy."
      percent="3.24%"
      cost="4.10¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://news.mit.edu/sites/default/files/images/202212/MIT-Windy-Impact-01.jpg'
    />,
    <EnergyCard
      current={card}
      index={3}
      title="HYDROELECTRIC ENERGY"
      description="Hydroelectric energy is a form of energy that captures the kinetic energy in the motion of water molecules. Hydroelectric dams are used to convert this energy into electricity."
      percent="2.28%"
      cost="6.10¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/04/Untitled-design-2022-04-11T122006.758.jpg'
    />,
    <EnergyCard
      current={card}
      index={2}
      title="BIO ENERGY"
      description="Bioenergy is harnessed from chemical reactions in waste, or existing biomass. Biomass is then converted to electricity using chemical processes."
      percent="0.48%"
      cost="6.10¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://think.ing.com/uploads/hero/_w800h450/170521-image-bio_energy_with_caption.jpg'
    />,
    <EnergyCard
      current={card}
      index={1}
      title="GEOTHERMAL ENERGY"
      description="Geothermal energy, a renewable, clean, and inexhaustible source, harnesses Earth's interior heat, ensuring a constant and stable supply. Naturally occurring in geysers, natural springs, and volcanoes, it emerges in optimal locations."
      percent="0.24%"
      cost="5.60¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/NesjavellirPowerPlant_edit2.jpg/1200px-NesjavellirPowerPlant_edit2.jpg'
    />,
    <EnergyCard
      current={card}
      index={0}
      title="NUCLEAR ENERGY"
      description="Nuclear energy is a form of non-renewable energy that is generated by splitting atoms. Nuclear energy is generated through the process of nuclear fission, where the nucleus of an atom is split, releasing a tremendous amount of energy. This energy is harnessed to produce electricity in nuclear power plants, which operate by heating water to produce steam that drives turbines connected to generators. Though non-renewable, we chose to include nuclear energy as a form of green energy (literally) due to its low carbon emissions."
      percent="8.00%"
      cost="2.27¢/KWh"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
      image='https://t3.ftcdn.net/jpg/04/36/53/74/360_F_436537490_m7hFC2c16GhIDpGXEa2uImjtwYeg1Qnd.jpg'
    />,
  ];

  return (
    <div>
      <Spline
        id="home-hero-background"
        scene="https://prod.spline.design/wIWRzUui0R-KIPvm/scene.splinecode"
      />
      <h1 id="home-title">
        <ReactTyped
          strings={["Alternate\nEnergy"]}
          typeSpeed={50}
          loop={false}
          showCursor={true}
        />
      </h1>
      <div id="home-content">
        <h1 class="home-header">
          Some <span class="home-text-glow">Statistics</span>
        </h1>
        <h2 class="home-subheader">Energy Consumption per Source</h2>
        <div class="home-content-card">
          <img
            class="home-graph"
            alt="Main Graph"
            src="https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/image2.png"
          />
          <ul class="home-list">
            <li class="home-text">
              <span class="home-bullet">
                As illustrated in the chart, only 12% of the United States’
                energy comes from renewable sources
              </span>
            </li>
            <li class="home-text">
              <span class="home-bullet">
                The United States uses approximately 23% of the world's energy
                while being only 4.23% of the world population
              </span>
            </li>
            <li class="home-text">
              <span class="home-bullet">
                Energy use in America is doubling every 20 years
              </span>
            </li>
            <li class="home-text">
              <span class="home-bullet">
                We as the US need to make up for contributing to almost a
                quarter of the world's energy consumption
              </span>
            </li>
          </ul>
        </div>
        <h2 class="home-subheader">Energy Consumption per US Citizen</h2>
        <div class="home-content-card">
          <img
            class="home-graph"
            alt="Main Graph"
            src="https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/image1.png"
          />
          <ul class="home-list">
            <li class="home-text">
              <span class="home-bullet">
                Because the US boasts one of the highest per capita energy
                usages, the average American consumes a significant amount of
                energy
              </span>
            </li>
            <li class="home-text">
              <span class="home-bullet">
                The breakdown shown above shows some of the significant uses of
                energy by person
              </span>
            </li>
            <li class="home-text">
              <span class="home-bullet">
                This graphic analysis suggests Americans can save energy by
                lowering home A/C use (or improving insulation), conserving
                water, and turning off unused lights and appliances
              </span>
            </li>
          </ul>
        </div>
        <h1 class="home-header">
          Energy Comes in <span class="home-text-glow">Many Forms</span>
        </h1>
        <div id="home-carousel">{cards}</div>
        <h1 class="home-header">
          Interactive <span class="home-text-glow">Map</span>
        </h1>
        <p id="home-map">
          Explore the Energy Breakdown in the USA by State at our Interactive
          Map!
        </p>
        <img src={Map} alt='' id='home-map-image' />
        <Link to="/map" id="home-map-button">
          VISIT
        </Link>
        <div id="home-spacing" />
      </div>
    </div>
  );
}

export default Home;
