import React, { useState } from "react";
import "./../styles/Geothermal.css";

const WhatIsgeothermalEnergy = () => {
  return (
    <div className="what-is-geothermal-energy-container">
      <div className="what-is-geothermal-energy-text">
        <h2 className="what-is-geothermal-energy-h2">
          What is Geothermal Energy
        </h2>
        <p className="what-is-geothermal-energy-paragraph">
          Geothermal energy, a renewable, clean, and inexhaustible source,
          harnesses Earth's interior heat, ensuring a constant and stable
          supply. Naturally occurring in geysers, natural springs, and
          volcanoes, it emerges in optimal locations. Geothermal plants operate
          by extracting underground fluids at high temperatures, generating hot
          steam to power turbines and produce electricity. Through a closed
          system, the extracted fluid is converted back into water and returned
          underground, emitting no pollutants into the atmosphere. The potential
          of geothermal plants hinges on temperature and thermal flow rate,
          essential factors determining their effectiveness.
        </p>
      </div>
      <div className="what-is-geothermal-energy-image">
        <img
          src="https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Geothermal-Energy.png"
          alt="geothermal Energy"
          style={{ marginBottom: "50px" }}
        />
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: "Potential for Advancements",
      description:
        "Geothermal energy offers great potential for future advancements, including the possibility of supercritical geothermal systems that can significantly increase power density.",
      image:
        "https://cdn-icons-png.freepik.com/256/2022/2022299.png?semt=ais_hybrid",
    },
    {
      title: "Available 24/7",
      description:
        "Geothermal energy is available 24 hours a day, not reliant on weather patterns or day/night cycles, providing a stable energy source with a high capacity factor.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/8bc1c27cc69370779379b8af75475666cd05bb33/GeothermalSupport5.png",
    },
    {
      title: "High Power Density Potential",
      description:
        "Supercritical geothermal systems have the potential to generate ten times more energy than conventional geothermal systems, making them highly efficient and promising for future energy needs.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/3ce4c734d42d5a7df5182717a76951fbbc09e8f9/GeothermalSupport6.png",
    },
    {
      title: "Versatile Industrial Applications",
      description:
        "Low-enthalpy geothermal energy can directly benefit various industries such as water desalination, greenhouses, fish farming, and large-scale chemical production, reducing operational costs and environmental impact.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/4fd98a9f153efc825c6771688776c09883a26478/GeothermalSupport4.png",
    },
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-h2">Benefits</h2>
      <p className="benefits-paragraph">
        Geothermal energy offers some of the most promising benifits for the
        future of renewable energy production
      </p>
      <div className="benefits-cards-container">
        {benefitsData.map((benefit, index) => (
          <div className="benefits-card" key={index}>
            <div className="card-inner">
              <div className="card-image">
                <img src={benefit.image} alt={benefit.title} />
              </div>
              <div className="card-content">
                <h3 className="benefits-h3">{benefit.title}</h3>
                <p className="benefits-paragraph">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LimitationsAndShortcomings = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      title: "Environmental Disruption",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/ebc59379e0d260a8614ec7b09adcd98205de4b33/GeothermalSupport2.png",
      text: "Drilling for geothermal plants, while relatively small in area, can disrupt surrounding habitats and wildlife. Additionally, the development of fumaroles, emitting volcanic gases and vapors, is a potential consequence, further impacting the environment. The fluid used in geothermal plants contains a range of harmful chemicals, including hydrogen sulfide, arsenic, mercury, and lead. These toxins can seep into nearby areas, posing risks to plants and wildlife.",
    },
    {
      title: "Location Limitations",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/6a67d016c17987f0a3d463633844621ecd8933a2/GeoSupportImage1.png",
      text: "Geothermal energy is location-dependent, with optimal sites often situated in remote areas such as Western states in the US and Hawaii. This necessitates the construction of extensive power lines to transport electricity to urban centers, increasing costs and potential energy loss during transmission.",
    },
    {
      title: "Induced Seismic Activity",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/979e04986cfc3af4129e0047fe9d137eefc2dc4f/GeoghermalSupportImage3.png",
      text: "Induced seismic activity is a significant concern associated with geothermal power production, especially with the development of enhanced geothermal systems (EGS). This phenomenon, observed globally, can lead to economic consequences and public concern, as observed in various locations including Indonesia, the Philippines, Japan, North and South America, and New Zealand.",
    },
  ];

  return (
    <div className="container">
      <h1 className="limitations-h1">Limitations and Shortcomings</h1>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="limitations-section">
        <div className="limitation-card">
          <img
            className="limitations-image"
            src={tabs[selectedTab].image}
            alt={tabs[selectedTab].title}
          />
          <div className="limitation-content">
            <h2 className="limitations-h2">{tabs[selectedTab].title}</h2>
            <p className="limitations-paragraph">{tabs[selectedTab].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowgeothermalEnergyWorks = () => {
  return (
    <div className="callout-box">
      <div className="callout-content">
        <div className="text-content">
          <h2 className="callout-title">How geothermal Energy Works</h2>
          <p className="callout-text">
            Geothermal energy harnesses Earth's natural heat to generate
            electricity, providing a constant and stable power source.
            Geothermal plants tap into underground reservoirs of hot fluid,
            typically water, by drilling deep wells. As the fluid is at high
            temperatures, it releases steam or vapor, which drives turbines to
            produce electricity. This process operates within a closed-loop
            system, where the extracted fluid is then re-injected underground.
            This minimizes environmental impact. However, to increase
            efficiency, geothermal plants use the addition of chemical energy
            carriers (CECs), like{" "}
            <img
              className="latex"
              src="https://math.vercel.app/?from=CH_{3}OH"
              alt="equation"
            />{" "}
            (methanol) and{" "}
            <img
              className="latex"
              src="https://math.vercel.app/?from=NH_{3}"
              alt="equation"
            />{" "}
            (ammonia). These chemicals optimize the energy extraction process by
            enhancing heat transfer and fluid circulation. For instance,
            methanol facilitates thermal decomposition or steam reforming,
            capturing heat efficiently through the reaction:{" "}
            <img
              className="latex"
              src="https://math.vercel.app/?from=\ce{CH3OH + H2O + Heat <--> CO2 + 3H2}"
              alt="equation"
            />{" "}
            The standard heat of the reforming reaction is 130,331 kJ/kmol of
            methanol. Additionally, both methanol and ammonia play crucial roles
            in increasing fluid permeability within Enhanced Geothermal Systems
            (EGS), where ammonia's thermal decomposition boasts a high energy
            absorption capacity:{" "}
            <img
              className="latex"
              src="https://math.vercel.app/?from=\ce{2NH3 + Heat <--> N2 + 3H2}"
              alt="equation"
            />{" "}
            Where the Standard heat of reaction of 45,951 kJ/kmol of ammonia.{" "}
            With the aid of these chemical reactions, clean and sustainable
            energy can be extracted straight from the Earth's core.
          </p>
        </div>
        <div className="image-content">
          <img
            className="image-style"
            src="https://guidetoiceland.imgix.net/738291/x/0/krafff.jpg?ixlib=php-3.3.0"
            alt="place holder"
          />
        </div>
      </div>
    </div>
  );
};

function Geothermal() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <WhatIsgeothermalEnergy />
      <Benefits />
      <LimitationsAndShortcomings />
      <br />
      <HowgeothermalEnergyWorks />
    </div>
  );
}

export default Geothermal;
