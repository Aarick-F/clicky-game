import React, { Component } from 'react';
import "./GameBoard.css";
import images from "../../images.json";
import Image from "../Image/Image";

class GameBoard extends Component {

  state = {
    images
  };

  render() {
    return (
      <div className="gameBoard">
        {this.state.images.map(image => (
          <Image
            key={image.id}
            source={image.src}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;