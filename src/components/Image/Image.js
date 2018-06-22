import React, { Component } from 'react';
import "./Image.css";

const Image = props => {
  return (
    <img className="image"
    alt={props.name}
    src={props.source}
    onClick={props.click} />
  );
}

export default Image;