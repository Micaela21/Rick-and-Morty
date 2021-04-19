import React from "react";
import Nav from "./components/Nav/Nav.js";
import Image from "./components/Img/Img";
import Home from "./components/Home/Home.js";
import { Route } from "react-router-dom";
import NewCharacters from "./components/NewCharacters/NewCharacters.js";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.js";
import About from "./components/About/About";
import "./App.css";
import { connect } from "react-redux";
import { getCharacters } from "./Actions/Actions.js";

class App extends React.Component {
  componentDidMount() {
    this.props.getCharacters([1, 2, 3, 4, 5]);
  }

  render() {
    return (
      <div className={"app"}>
        <Route path="/" component={Nav} />
        <Route path="/rick-and-morty" component={Image} />
        <Route path="/home" component={Home} />
        <Route path="/newCharacters" component={NewCharacters} />
        <Route path="/character/:id" component={CharacterDetail} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: (ids) => dispatch(getCharacters(ids)),
  };
}

export default connect(null, mapDispatchToProps)(App);
