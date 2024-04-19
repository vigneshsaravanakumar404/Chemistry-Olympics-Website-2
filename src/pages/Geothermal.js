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
      image: "https://cdn-icons-png.freepik.com/256/2022/2022299.png?semt=ais_hybrid",
    },
    {
      title: "Available 24/7",
      description:
        "Geothermal energy is available 24 hours a day, not reliant on weather patterns or day/night cycles, providing a stable energy source with a high capacity factor.",
      image: "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/8bc1c27cc69370779379b8af75475666cd05bb33/GeothermalSupport5.png",
    },
    {
      title: "High Power Density Potential",
      description:
        "Supercritical geothermal systems have the potential to generate ten times more energy than conventional geothermal systems, making them highly efficient and promising for future energy needs.",
      image: "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/3ce4c734d42d5a7df5182717a76951fbbc09e8f9/GeothermalSupport6.png",
    },
    {
      title: "Versatile Industrial Applications",
      description:
        "Low-enthalpy geothermal energy can directly benefit various industries such as water desalination, greenhouses, fish farming, and large-scale chemical production, reducing operational costs and environmental impact.",
      image: "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/4fd98a9f153efc825c6771688776c09883a26478/GeothermalSupport4.png",
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
            geothermal energy is produced by capturing sunlight and converting
            it into electricity using photovoltaic cells. These cells are
            typically made of silicon and generate direct current (DC)
            electricity when exposed to sunlight. This electricity is then
            converted into alternating current (AC) by inverters, making it
            usable for powering homes and businesses. geothermal panels can be
            installed on rooftops or in open areas where they can receive
            uninterrupted sunlight.{" "}
            <img
              className="latex"
              src="https://math.https://github.com/vigneshsaravanakumar404/imagestorage/blob/4fd98a9f153efc825c6771688776c09883a26478/GeothermalSupport4.pngel.app/?from=2H_2+%2B+O_2+%5Clongrightarrow+2H_2O"
              alt="equation"
            />
          </p>
        </div>
        <div className="image-content">
          <img
            className="image-style"
            src="https://via.placeholder.com/500"
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
