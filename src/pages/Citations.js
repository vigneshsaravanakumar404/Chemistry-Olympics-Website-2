import React from "react";
import "./../styles/Citations.css";

const hardcodedCitations = [
  "Author Last Name, Author First Name. Title of Source. Publisher, Publication Year.",
  "Author Last Name, Author First Name. Title of Source. Publisher, Publication Year.",
  "Author Last Name, Author First Name. Title of Source. Publisher, Publication Year.",
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
