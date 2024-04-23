import React, { useState } from "react";

import "./../styles/Bio.css";

const WhatIsBioEnergy = () => {
  return (
    <div className="what-is-bio-energy-container">
      <div className="what-is-bio-energy-text">
        <h2 className="what-is-bio-energy-h2">What is Bio Energy?</h2>
        <p className="what-is-bio-energy-paragraph">
          Bio energy, as the name suggests, is energy derived from the Sun’s
          radiation. Several living organisms such as plants and algae are
          reliant on the Sun’s radiation for their energy. bio energy for the
          production of electricity, however, is much different from the process
          that plants use to photosynthesize. bio energy makes up 12% of the
          energy produced through renewable means. Even calculators make use of
          tiny bio panels to recharge their batteries. bio energy is projected
          to produce 45% of the total energy consumption by the year 2050.
          Biofuels are one of the most extensively used sources of renewable
          energy due to the year-round availability of raw material, i.e.,
          biomass, that attributes towards large-scale utilization with a low
          carbon impact. Huge future potential. Bioenergy refers to secondary
          energy derived from biomass, which can be bioethanol, biogas,
          biodiesel, biohydrogen, electricity generation, or biomass briquettes
          fuel Biomass is now recognized as the most promising renewable energy
          source due to its carbon-based structural composition that can be
          turned directly into liquid fuel, attributing towards the world’s
          long-term energy supply
        </p>
      </div>
      <div className="what-is-bio-energy-image">
        <img
          src="https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/ec1d54c9c99d52f9e14b9dfb65569697bc08e9b6/Bio-Energy.png"
          alt="bio Energy"
        />
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: "Renewable",
      description:
        "Organic matter is all around us, whether it be decomposing animals or trees or landfills. Since biomass resources get their energy from the sun, they are quickly able to replenish, unlike fossil fuels, which take millions of years.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Bio.png",
    },
    {
      title: "Reduces waste, in addition to carbon emissions",
      description:
        "Landfills negatively impact the environment, whether by contaminating air and water or emitting gases. The use of bioenergy can help reduce the amount of waste that ends up in landfills, and alleviate some of those issues.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/1.png",
    },
    {
      title: "Reliable and Consistent",
      description:
        "Biomass energy can be easily turned on and off. It doesn't rely of nature after you have collected the organic matter, unlike solar or hydropower. But, some biomass sources would be seasonal.",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/Resource_classification_of_biomass_energy_600x600.webp",
    },
  ];

  return (
    <div className="benefits-section-bio">
      <h2 className="benefits-h2">Benefits</h2>
      <p className="benefits-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc
        nunc nec.
      </p>
      <div className="benefits-cards-container-bio">
        {benefitsData.map((benefit, index) => (
          <div className="benefits-card-bio" key={index}>
            <div className="card-inner-bio">
              <div className="card-image-bio">
                <img src={benefit.image} alt={benefit.title} />
              </div>
              <div className="card-content-bio">
                <h3 className="benefits-h3-bio">{benefit.title}</h3>
                <p className="benefits-paragraph-bio">{benefit.description}</p>
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
      title: "Cost",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/download%20(5).jpeg",
      text: "There is cost to store, transport, and extract energy from biomass. This is in addition to upfront costs of running a biomass plant",
    },
    {
      title: "Space requirements",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/download%20(6).jpeg",
      text: "Biomass plants require space for the plants, in addition to space for plants to be grown and harvested.",
    },
    {
      title: "Environmental impact",
      image:
        "https://raw.githubusercontent.com/vigneshsaravanakumar404/imagestorage/main/the-environmental-impact-of-agriculture-during-the-covid-19-pandemic-and-sdg-2022-01-17-032757.jpg",
      text: "While bioenergy provides a clean source of energy, the generation process could lead to deforestation. Harvesting minerals and bioenergy resources could ruin the soil's health. Furthermore, it takes lots of water to keep biomass energy plants running, such as growing crops.",
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

const HowbioEnergyWorks = () => {
  return (
    <div className="callout-box-bio">
      <div className="callout-content-bio">
        <div className="text-content-bio">
          <h2 className="callout-title-bio">How bio Energy Works</h2>
          <p className="callout-text-bio">
            <div className="image-content-solar">
              <img
                className="image-style-solar"
                src="https://via.placeholder.com/500"
                alt="place holder"
                //src/images/Screenshot 2024-04-23 at 10.27.16 AM.png
              />
            </div>
            <div className="image-content-solar">
              <img
                className="image-style-solar"
                src="https://via.placeholder.com/500"
                alt="place holder"
                //src/images/Screenshot 2024-04-23 at 10.29.13 AM.png
              />
            </div>
            Current normal technologies are used for liquid biofuels on a large
            scale. Sugar and starch-based ethanol and oil-crop-based biodiesel,
            are examples. The manufacturing of first-generation bioethanol is a
            well-established process that has seen widespread adoption,
            especially in the United States and Brazil. It can be prepared from
            any organic raw material and can be transformed to other forms of
            sugar such as starch or inulin. Scientists are now focusing their
            efforts on second-generation biofuels production as the
            first-generation biofuels are involved with food-crop conflicts
            Advanced second-generation biofuels are produced from biomass that
            is not food-based, such as the husks, leaves, and stem that remain
            after crop production is harvested. Nonetheless, it is commonly
            known that expensive and advanced technology are needed to extract
            second-generation biofuels. Furthermore, a number of obstacles, such
            as the need for expensive enzymes, prevent the commercialization of
            second-generation biofuels. Because of this, researchers focused
            mostly on the third generation of biofuels, which used microalgae
            and microorganisms to make liquid biofuels like biodiesel. The
            breakdown of biomass into aromatics and simple sugars for further
            conversion into bioproducts is an enticing use of bioenergy crops.
            For instance, bioenergy crops can be genetically modified to
            increase biomass production and increase resilience.
            <div className="image-content-solar">
              <img
                className="image-style-solar"
                src="https://via.placeholder.com/500"
                alt="place holder"
                //src/images/Screenshot 2024-04-23 at 10.35.12 AM.png
              />
            </div>
            <div className="image-content-solar">
              <img
                className="image-style-solar"
                src="https://via.placeholder.com/500"
                alt="place holder"
                //src/images/Screenshot 2024-04-23 at 10.35.29 AM.png
              />
            </div>
          </p>
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
