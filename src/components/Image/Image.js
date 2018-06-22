import React, { Component } from 'react';
import "./Image.css";

const Image = props => {
  return (
    <img className="image" src={props.source} />
  );
}

export default Image;