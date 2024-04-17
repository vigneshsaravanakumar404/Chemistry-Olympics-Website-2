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
      <div className="limitations-section"></div>
      <HeroBanner />
      <Benefits />
      <LimitationsAndShortcomings />
    </div>
  );
}

export default Solar;
