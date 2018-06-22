import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Content />
        <Footer />
      </div>  
    );
  }
}

export default App;
