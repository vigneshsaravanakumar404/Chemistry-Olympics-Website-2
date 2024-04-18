import React, { useState } from "react";
import "./../styles/Geothermal.css";

// TODO: ADD ANIMATIONS AND TEXT EFFECTS
// TODO: CHANGAE IMAGES
const WhatIsBioEnergy = () => {
  return (
    <div className="what-is-bio-energy-container">
      <div className="what-is-bio-energy-text">
        <h2 className="what-is-bio-energy-h2">What is bio Energy?</h2>
        <p className="what-is-bio-energy-paragraph">
          bio energy, as the name suggests, is energy derived from the Sun’s
          radiation. Several living organisms such as plants and algae are
          reliant on the Sun’s radiation for their energy. bio energy for the
          production of electricity, however, is much different from the process
          that plants use to photosynthesize. bio energy makes up 12% of the
          energy produced through renewable means. Even calculators make use of
          tiny bio panels to recharge their batteries. bio energy is projected
          to produce 45% of the total energy consumption by the year 2050.
        </p>
      </div>
      <div className="what-is-bio-energy-image">
        <img src="../images/Geothermal-Energy.png" alt="bio Energy" />
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: "Renewable and Sustainable",
      description:
        "bio energy is both renewable and sustainable in the long term as it relies on the Sun. bio energy will continue to hit the earth’s surface for several billion years, the entire lifetime of the Sun.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Cost Effective and Low Maintenance",
      description:
        "Though there are initial installation costs, in the long term bio energy is both cost effective and low maintenance. With no moving or frequently worn out parts, bio energy can last, oftentimes, 30 - 35 years before having to be replaced.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Reduces Energy Costs",
      description:
        "Currently most houses with bio panels installed sell energy back to the grid during the day as they produce a net positive amount of energy. They can then use this money to buy power from the grid during the day. This means even during the nighttime, bio energy produced during the day will reduce energy costs.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Viable Option in Remote Areas",
      description:
        "Sometimes bio energy can be the only viable option in a certain location. In remote or rural areas, places without access to the central power grid, bio energy can be the only option.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Clean and Environmentally Friendly",
      description:
        "bio energy is also clean. It produces no harmful emissions of greenhouse gases.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Contributes to Renewable Energy Production",
      description:
        "There are numerous benefits to bio energy and it is no surprise that it makes 19% of the total energy produced by renewable energy sources in the United States.",
      image: "https://via.placeholder.com/500",
    },
  ];

  return (
    // TODO: FIX IMAGES NOT CENTERED IN SMALL DEVICES
    <div className="benefits-section">
      <h2 className="benefits-h2">Benefits</h2>
      <p className="benefits-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc
        nunc nec.
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
      title: "Limitation 1",
      image: "https://via.placeholder.com/500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
    },
    {
      title: "Limitation 2",
      image: "https://via.placeholder.com/500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
    },
    {
      title: "Limitation 3",
      image: "https://via.placeholder.com/500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
    },
    // Add more limitations as needed
  ];

  // TODO: FIX COLOR SCHEME
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

// TODO: For small devices make the images stack on top of each other, then the text
const HowbioEnergyWorks = () => {
  return (
    <div className="callout-box">
      <div className="callout-content">
        <div className="text-content">
          <h2 className="callout-title">How bio Energy Works</h2>
          <p className="callout-text">
            bio energy is produced by capturing sunlight and converting it into
            electricity using photovoltaic cells. These cells are typically made
            of silicon and generate direct current (DC) electricity when exposed
            to sunlight. This electricity is then converted into alternating
            current (AC) by inverters, making it usable for powering homes and
            businesses. bio panels can be installed on rooftops or in open areas
            where they can receive uninterrupted sunlight.{" "}
            <img
              className="latex"
              src="https://math.vercel.app/?from=2H_2+%2B+O_2+%5Clongrightarrow+2H_2O"
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

function Bio() {
  return (
    <div>
      <WhatIsBioEnergy />
      <Benefits />
      <LimitationsAndShortcomings />
      <br />
      <HowbioEnergyWorks />
    </div>
  );
}

export default Bio;
