import React from "react";
import { getCharacters, removeCharacters } from "../../Actions/Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Character from "../Character/Character.js";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.getCharacters(this.props.characters.map((obj) => obj.id));
  }

  render() {
    return (
      <div className={"containerH"}>
        {this.props.characters?.map((item) => (
          <div className={"itemH"}>
            <Link to={`/character/${item.id}`} className={"itemH"}>
              <Character image={item.image} name={item.name} />
            </Link>
            <button
              onClick={() => {
                this.props.removeCharacters(item.id);
                alert("Acabas de eliminar un personaje de tu home");
              }}
              className={"newButtonH"}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: (ids) => dispatch(getCharacters(ids)),
    removeCharacters: (ids) => dispatch(removeCharacters(ids)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
