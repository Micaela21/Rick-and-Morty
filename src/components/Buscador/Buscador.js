import React from "react";
import { addCharacters } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./Buscador.css";

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCharacters(this.state.name);
  }

  render() {
    return (
      <form className={"form"}>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          className={"input"}
        />
        <button onClick={(e) => this.handleSubmit(e)} className={"buttonBus"}>
          Search New Characters
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCharacters: (name) => dispatch(addCharacters(name)),
  };
}

export default connect(null, mapDispatchToProps)(Buscador);
