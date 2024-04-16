import "./../styles/Energy.css";

const Benefits = () => {
  const benefitsData = [
    { title: "Clean Energy", description: "Solar energy is clean and renewable, reducing reliance on fossil fuels and minimizing carbon emissions." },
    { title: "Cost Savings", description: "Solar power can lead to significant long-term cost savings on electricity bills, especially with incentives and rebates." },
    { title: "Low Maintenance", description: "Solar panels require minimal maintenance, with no moving parts and warranties of up to 25 years or more." },
    // Add more benefits as needed
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-h2">Benefits of Solar Energy</h2>
      <div className="benefits-cards">
        {benefitsData.map((benefit, index) => (
          <div className="card" key={index}>
            <h3 className="benefits-h3">{benefit.title}</h3>
            <p className="benefits-paragraph">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



const HeroBanner = () => {
  return (
    <div className="solar-hero-banner" style={{ color: "#43CB8E", fontSize: "40px" }}>
      <h1>
        Solar Energy
      </h1>
    </div>
  );
};

function Solar() {
  return (
    <div>
      <div className="solar-content"></div>
      <HeroBanner />
      <Benefits />
    </div>
  );
}

export default Solar;
