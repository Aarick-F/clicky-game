import React, { Component } from 'react';
import "./Content.css";
import GameBoard from "../GameBoard/GameBoard";

class Content extends Component {
  render() {
    return (
      <section className="content">
        <h4>Don't click the same image twice!</h4>
        <GameBoard />
      </section>
    );
  }
}

export default Content;