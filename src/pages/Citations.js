import React from "react";
import "./../styles/Citations.css";

const hardcodedCitations = [
  "Gaucher, Emmanuel, et al. “Induced Seismicity in Geothermal Reservoirs: A Review of Forecasting Approaches.” Renewable and Sustainable Energy Reviews, vol. 52, Dec. 2015, pp. 1473–1490, https://doi.org/10.1016/j.rser.2015.08.026. Accessed 20 June 2020.",
  "Gorthy, Aditi, et al. “Mako: NSU Undergraduate Student Journal Mako: NSU Undergraduate Student Journal Geothermal Energy and Its Impacts on the Environment Geothermal Energy and Its Impacts on the Environment.” Journal, vol. 2023, 2023, p. 4, nsuworks.nova.edu/cgi/viewcontent.cgi?article=1036&context=mako.",
  "Green Mountain Energy. “Renewable Energy 101: How Does Geothermal Energy Work?” YouTube, 3 Oct. 2017, www.youtube.com/watch?v=j7q653ffQO4.",
  "Jody, B. J., et al. “Capture of Geothermal Heat as Chemical Energy.” Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, vol. 37, no. 24, 11 Dec. 2015, pp. 2647–2654, https://doi.org/10.1080/15567036.2012.721056.",
  "Patel, Sonal. “EGS, AGS, and Supercritical Geothermal Systems: What’s the Difference?” POWER Magazine, 4 Apr. 2023, www.powermag.com/egs-ags-and-supercritical-geothermal-systems-whats-the-difference/.",
  "Vargas, Carlos A., et al. “Geothermal Energy as a Means to Decarbonize the Energy Mix of Megacities.” Communications Earth & Environment, vol. 3, no. 1, 18 Mar. 2022, pp. 1–11, www.nature.com/articles/s43247-022-00386-w, https://doi.org/10.1038/s43247-022-00386-w. Accessed 13 Apr. 2022.",
  '"How We Use Energy." The National Academy of Sciences, http://needtoknow.nas.edu/energy/energy-use/home-work/. Accessed 12 Apr. 2024.',
  '"Average renewable electricity generation cost worldwide in 2022, by energy source." Statista, August 2023, https://www.statista.com/statistics/478049/global-utility-scale-electricity-generation-cost-by-resource/. Accessed 12 Apr. 2024.',
  '"SAS OUTPUT." U.S. Energy Information Administration, https://www.eia.gov/electricity/annual/html/epa_08_04.html. Accessed 12 Apr. 2024.',
  'Tayari, Farid, and Tom Seng. "Energy Production and Consumption in the United States." Pennsylvania State University, https://www.e-education.psu.edu/ebf301/node/457. Accessed 12 Apr. 2024.',
];

function Citations() {
  return (
    <div>
      <br />
      <br />
      <h1 id="citations-header">Works Cited</h1>
      <div className="citations-container">
        {hardcodedCitations.map((citation, index) => (
          <div key={index} className="citation">
            {citation}
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Citations;
