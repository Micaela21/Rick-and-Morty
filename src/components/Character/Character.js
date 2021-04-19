import React from "react";
import "./Character.css";

class Character extends React.Component {
  render() {
    return (
      <div className={"containerImg"}>
        <img src={this.props.image} alt="img" className={"img"} />
        <p className={"name"}>{this.props.name}</p>
      </div>
    );
  }
}

export default Character;
