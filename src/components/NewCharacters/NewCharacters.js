import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador.js";
import { upDateCharacters } from "../../Actions/Actions.js";
import "./NewCharacters.css";
import Character from "../Character/Character.js";
export class NewCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleSubmit(obj) {
    this.props.upDateCharacters(obj);
    this.setState({ open: true });
  }

  render() {
    return (
      <div>
        <div className={"container"}>
          <Buscador />
        </div>
        <div className={"container"}>
          {this.props.newCharacters.map((item) => (
            <div className={"item"}>
              <Link to={`/character/${item.id}`} className={"itemH"}>
                <Character image={item.image} name={item.name} />
              </Link>
              <button
                onClick={() => {
                  this.handleSubmit(item);
                  alert("Acabas de agregar un personaje de tu home");
                }}
                className={"newButton"}
              >
                Add to Home
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newCharacters: state.newCharacters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    upDateCharacters: (obj) => dispatch(upDateCharacters(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacters);
