import "./../styles/Energy.css";
import { ReactTyped } from "react-typed";

// TODO: ADD ANIMATIONS AND TEXT EFFECTS
const HeroBanner = () => {
  return (
    <div className="solar-hero-banner">
      <h1>Solar Energy</h1>
    </div>
  );
};

const WhatIsSolarEnergy = () => {
  return (
    <div className="what-is-solar-energy-container">
      <div className="what-is-solar-energy-text">
        <h2 className="what-is-solar-energy-h2">What is Solar Energy?</h2>
        <p className="what-is-solar-energy-paragraph">
          Solar energy is radiant light and heat from the Sun that is harnessed
          using a range of ever-evolving technologies such as solar heating,
          photovoltaics, solar thermal energy, solar architecture, molten salt
          power plants and artificial photosynthesis. Solar energy is radiant
          light and heat from the Sun that is harnessed using a range of
          ever-evolving technologies such as solar heating, photovoltaics, solar
          thermal energy, solar architecture, molten salt power plants and
          artificial photosynthesis.Solar energy is radiant light and heat from
          the Sun that is harnessed using a range of ever-evolving technologies
          such as solar heating, photovoltaics, solar thermal energy, solar
          architecture, molten salt power plants and artificial photosynthesis.
        </p>
      </div>
      <div className="what-is-solar-energy-image">
        {/* Replace 'image-url.jpg' with the URL of your large image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3558/3558016.png"
          alt="Solar Energy"
        />
      </div>
    </div>
  );
};

const LimitationsAndShortcomings = () => {
  return (
    <div className="limitations-section">
      <h2 className="limitations-h2">Limitations and Shortcomings</h2>
      <p className="limitations-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc
        nunc nec.
      </p>
      {/* Add more limitations/shortcomings here if needed */}
    </div>
  );
};

const Benefits = () => {
  const benefitsData = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac ultrices ultricies, nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec.",
      image: "https://via.placeholder.com/500",
    },
  ];

  return (
    // TODO: CHANGE TO SCALE FROM 3 TO 1
    // TODO: FIX IMAGES NOT CENTERED IN SMALL DEVICES
    <div className="benefits-section">
      <h2 className="benefits-h2">Benefits</h2>
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

function Solar() {
  return (
    <div>
      <WhatIsSolarEnergy />
      <Benefits />
      {/* <LimitationsAndShortcomings /> */}
    </div>
  );
}

export default Solar;
