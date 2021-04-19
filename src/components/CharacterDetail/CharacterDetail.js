import React from "react";
import { connect } from "react-redux";
import { characterDetail } from "../../Actions/Actions.js";
import "./CharacterDetail.css";

class CharacterDetail extends React.Component {
  componentDidMount() {
    const characterId = this.props.match.params.id;
    this.props.characterDetail(characterId);
  }
  render() {
    return (
      <div className={"containerD"}>
        <h1 className={"titleh1"}>{this.props.detail.name}</h1>
        <img
          src={this.props.detail.image}
          alt="img"
          className={this.props.detail.status === "Alive" ? "imgDG" : "imgDR"}
        />
        <div className={"containerText"}>
          <p className={"data"}>Status: {this.props.detail.status}</p>
          <p className={"data"}>Specie: {this.props.detail.species}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    detail: state.detail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    characterDetail: (id) => dispatch(characterDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
