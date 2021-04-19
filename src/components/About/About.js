import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className={"containerA"}>
        <p className={"text"}>
          Application created by Micaela Alvarez. It was created with
          React-Redux. I used class-components and css pure for the style of the
          page.
        </p>
      </div>
    );
  }
}

export default About;
