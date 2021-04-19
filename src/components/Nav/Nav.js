import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <ul className={"navbar"}>
        <Link to="/home" className={"conlink"}>
          <li className={"link"}>Home</li>
        </Link>
        <Link to="newCharacters" className={"conlink"}>
          <li className={"link"}>Search</li>
        </Link>
        <Link to="/about" className={"conlink"}>
          <li className={"link"}>About App</li>
        </Link>
      </ul>
    );
  }
}

export default Nav;
