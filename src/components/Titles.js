import React, { Component } from "react";

class Titles extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="fangstock-container__title">Stock Prices </h1>
        <h3 className="fangstock-container__subtitle">
          Find information about a stock
        </h3>
      </React.Fragment>
    );
  }
}

export default Titles;
