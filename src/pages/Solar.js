import React, { useState } from "react";
import "./../styles/Solar.css";

const WhatIsSolarEnergy = () => {
  return (
    <div className="what-is-solar-energy-container">
      <div className="what-is-solar-energy-text">
        <h2 className="what-is-solar-energy-h2">What is Solar Energy?</h2>
        <p className="what-is-solar-energy-paragraph">
          Solar energy, as the name suggests, is energy derived from the Sun’s
          radiation. Several living organisms such as plants and algae are
          reliant on the Sun’s radiation for their energy. Solar energy for the
          production of electricity, however, is much different from the process
          that plants use to photosynthesize. Solar energy makes up 12% of the
          energy produced through renewable means. Even calculators make use of
          tiny solar panels to recharge their batteries. Solar energy is
          projected to produce 45% of the total energy consumption by the year
          2050. It is imperative that we use this new technology as direct and
          indirect effects of climate change kill at least 160,000 people per
          year, from floods, droughts, temperature changes, and epidemics.
        </p>
      </div>
      <div className="what-is-solar-energy-image">
        {/* Replace 'image-url.jpg' with the URL of your large image */}
        <img
          src="https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/ec1d54c9c99d52f9e14b9dfb65569697bc08e9b6/Solar-Energy.png"
          alt="Solar Energy"
        />
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: "Renewable and Sustainable",
      description:
        "Solar energy is both renewable and sustainable in the long term as it relies on the Sun. Solar energy will continue to hit the earth’s surface for several billion years, the entire lifetime of the Sun.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/unnamed.png",
    },
    {
      title: "Cost Effective and Low Maintenance",
      description:
        "Though there are initial installation costs, in the long term solar energy is both cost effective and low maintenance. With no moving or frequently worn out parts, solar energy can last, oftentimes, 30 - 35 years before having to be replaced. Currently most houses with solar panels installed sell energy back to the grid during the day as they produce a net positive amount of energy. They can then use this money to buy power from the grid during the day. This means even during the nighttime, solar energy produced during the day will reduce energy costs.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/nudgescosteffective-609x419.jpg",
    },
    {
      title: "Viable Option in Remote Areas",
      description:
        "Huge abundance of solar energy, all across the globe. We are lucky to receive 120,000 TW of electromagnetic radiation, far exceeding human needs. Even with 10% efficiency, this is equivalent to 20,000 nuclear fission plants. Sometimes solar energy can be the only viable option in a certain location. In remote or rural areas, places without access to the central power grid, solar energy can be the only option.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/lester-alaska.png",
    },
    {
      title: "Clean and Environmentally Friendly",
      description:
        "Solar energy is also clean. It produces no harmful emissions of greenhouse gases. Capitalizing on solar energy does not produce any sound or pollution, so it doesn’t have adverse effects on the environment.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/download%20(3).jpeg",
    },
  ];

  return (
    <div className="benefits-section-solar">
      <h2 className="benefits-h2-solar">Benefits</h2>
      <p className="benefits-paragraph-solar">
      </p>
      <div className="benefits-cards-container-solar">
        {benefitsData.map((benefit, index) => (
          <div className="benefits-card-solar" key={index}>
            <div className="card-inner-solar">
              <div className="card-image-solar">
                <img src={benefit.image} alt={benefit.title} />
              </div>
              <div className="card-content-solar">
                <h3 className="benefits-h3-solar">{benefit.title}</h3>
                <p className="benefits-paragraph-solar">
                  {benefit.description}
                </p>
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
      title: "High Upfront Costs",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/92692cdce5676c7f2ae0d4dc53733d8914af13c7/download.png",
      text: "Solar panels installation cost on an average American house is $25,000.",
    },
    {
      title: "Can only capture energy at certain times during the day.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/92692cdce5676c7f2ae0d4dc53733d8914af13c7/main.png",
      text: "Since solar energy relies on light, dark periods of the day do not fuel the photovoltaic cell. To counteract this, solar panels often store the generated energy for later use.",
    },
    {
      title: "Spacing Constraints",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/92692cdce5676c7f2ae0d4dc53733d8914af13c7/download%20(4).jpeg",
      text: "To collect vasts amount of energy, solar panels require a lot of space. This can be a problem in urban areas where space is limited.",
    },
  ];

  return (
    <div className="container-bio">
      <h1 className="limitations-h1-bio">Limitations and Shortcomings</h1>
      <div className="tabs-bio">
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
      <div className="limitations-section-bio">
        <div className="limitation-card-bio">
          <img
            className="limitations-image-bio"
            src={tabs[selectedTab].image}
            alt={tabs[selectedTab].title}
          />
          <div className="limitation-content-bio">
            <h2 className="limitations-h2-bio">{tabs[selectedTab].title}</h2>
            <p className="limitations-paragraph-bio">
              {tabs[selectedTab].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowSolarEnergyWorks = () => {
  const explanations = [
    {
      paragraph:
        "Typical photovoltaic cells already in notes. A solar cell converts energy in the photons of sunlight into electricity by means of the photoelectric phenomenon found in certain types of semiconductor materials such as silicon and selenium. Efficiency of solar cells depends on temperature, insolation, spectral characteristics of sunlight and so on. Solar power can be converted directly into electrical power byphotovoltaic (PV) cells and photoelectrochemical cells. Utilizes p-n junctions",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/92692cdce5676c7f2ae0d4dc53733d8914af13c7/Screenshot%202024-04-23%20at%208.04.21%E2%80%AFAM.png",
    },
    {
      paragraph:
        "The main difference from photosynthetic systems issimply that the redox potential energy of the charge-separatedstate is not stored in products of subsequent reactions, butrather it is directly used to produce a photocurrent. We try to replicate natural photosynthesis.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.07.18%E2%80%AFAM.png",
    },
    {
      paragraph:
        "Photosynthesis in human’s hands can yield fruit of unimaginable power.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.08.09%E2%80%AFAM.png",
    },
    {
      paragraph:
        "ATP synthase finally utilizes the H+ gradient to generate ATP.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.09.20%E2%80%AFAM.png",
    },
    {
      paragraph:
        "This reaction occurs at photosystem II. Now, we consider artificial photosynthesis. We would want an antenna for light harvesting, reaction center for charge separation, catalysts between charged states and substrates, and a membrane to provide physical separation of the products. While some promising results, we don’t have a final finished product. We explain efforts towards coupling artificial antennas and Reaction-Center Building Blocks.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.10.13%E2%80%AFAM.png",
    },
    {
      paragraph:
        "Although the conversion of light into chemical energy by means of artificial systems seems to be a somewhat distant goal, a hybrid natural–artificial system capable of using light to obtain proton-motive force and then ATP synthesis has been constructed There are also efforts for conversion of light into mechanical work via molecular machines. Molecular rotary motor:",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.13.03%E2%80%AFAM.png",
    },
    {
      paragraph:
        "This was used to prototype a light-powered nanocar on an atomically flat surface. Molecular shuttles have been designed, but so far these cannot develop net mechanical work. Thus, chemists can play akey role in improving thermal and electrical conversion tech-nologies by finding new materials and new processes. How it is used in industry?",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.14.02%E2%80%AFAM.png",
    },
    {
      paragraph:
        "Typical industrial energy system: 4 main parts are power supply, production plant, energy recovery, and cooling system. Typically,the systems use solar collectors and concentrators to gather solar radiation, store it and use for heating air or water in domestic, commercial or industrial plants Solar as an input power is widely used for heat engines in many industrial applications. Stirling engines use any kind of external heat source for their operation. They are highly reliable, simple in design and construction, easy to operate and cost effective Example: Solar thermal is also used in textile industry for heating water at temperatures close to 100 ◦C for bleaching, dyeing and washing purposes",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Screenshot%202024-04-23%20at%208.14.58%E2%80%AFAM.png",
    },
  ];

  return (
    <div className="callout-heading-container">
      <h2 className="callout-title-solar">How Solar Energy Works</h2>
      <div className="callout-box-solar">
        <div className="callout-content-solar">
          {explanations.map((explanation, index) => (
            <div key={index} className="explanation">
              <p>{explanation.paragraph}</p>
              <img
                src={explanation.image}
                alt="Solar Energy Works"
                style={{ width: "50%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Solar() {
  return (
    <div>
      <WhatIsSolarEnergy />
      <Benefits />
      <LimitationsAndShortcomings />
      <br />
      <HowSolarEnergyWorks />
    </div>
  );
}

export default Solar;
