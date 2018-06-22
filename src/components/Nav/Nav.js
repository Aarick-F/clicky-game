import React, { Component } from 'react';
import "./Nav.css";
import ScoreDisplay from "../ScoreDisplay";

class Nav extends Component {

  state = {
    score: 0
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>CLICKY-GAME</h1>
          <h1>SCORE: <ScoreDisplay score={this.state.score} /></h1>
        </div>
      </div>
    );
  }
}

export default Nav;