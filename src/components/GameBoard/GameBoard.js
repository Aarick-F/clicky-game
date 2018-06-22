import React, { Component } from 'react';
import "./GameBoard.css";
import images from "../../images.json";
import Image from "../Image/Image";
import Nav from "../Nav/Nav";

class GameBoard extends Component {

  state = {
    images
  };

  handleClick = () => {
    alert("image clicked");
  }

  render() {
    return (
      <div className="gameBoard">
        {this.state.images.map(image => (
          <Image
            key={image.id}
            name={image.name}
            source={image.src}
            click={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default GameBoard;