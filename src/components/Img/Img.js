import React from "react";
import { Link } from "react-router-dom";
import Logo from "./RYM.png";
import "./Img.css";

class Image extends React.Component {
  render() {
    return (
      <Link to="/home" className={"containerImg"}>
        <img src={Logo} alt="Rick Y Morty" className={"imgB"} />
      </Link>
    );
  }
}

export default Image;
