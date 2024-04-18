import { ReactTyped } from "react-typed";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
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
      <div class="home-carousel-card-image" />
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
  const [card, setCard] = useState(2);
  const [scrollDirection, setScrollDirection] = useState("");

  const cards = [
    <EnergyCard
      current={card}
      index={5}
      title="SOLAR ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
    />,
    <EnergyCard
      current={card}
      index={4}
      title="WIND ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
    />,
    <EnergyCard
      current={card}
      index={3}
      title="HYDROELECTRIC ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
    />,
    <EnergyCard
      current={card}
      index={2}
      title="BIO ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
    />,
    <EnergyCard
      current={card}
      index={1}
      title="GEOTHERMAL ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
    />,
    <EnergyCard
      current={card}
      index={0}
      title="NUCLEAR ENERGY"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac."
      percent="1.44%"
      cost="4.00¢"
      setCard={setCard}
      scrollDirection={scrollDirection}
      setScrollDirection={setScrollDirection}
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
          <div class="home-graph" />
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
          <div class="home-graph" />
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
        <div id="home-map-image" />
        <Link to="/map" id="home-map-button">
          VISIT
        </Link>
        <div id="home-spacing" />
      </div>
    </div>
  );
}

export default Home;
