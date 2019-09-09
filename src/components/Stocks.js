import React, { Component } from "react";

class Stocks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="stock__info">
          <div>
            {this.props.name && this.props.price && (
              <p className="stock__key">
                Stock Information:{" "}
                <span className="stock__value">
                  {this.props.name} , ${this.props.price} per share{" "}
                </span>
              </p>
            )}
            {this.props.fiftytwoWeekHigh && (
              <p className="stock__key">
                52 week High:{" "}
                <span className="stock__value">
                  ${this.props.fiftytwoWeekHigh}
                </span>
              </p>
            )}
            {this.props.fiftytwoWeekLow && (
              <p className="stock__key">
                52 week Low:{" "}
                <span className="stock__value">
                  ${this.props.fiftytwoWeekLow}
                </span>
              </p>
            )}
            {this.props.volume && (
              <p className="stock__key">
                {" "}
                Volume:{" "}
                <span className="stock__value"> {this.props.volume}</span>
              </p>
            )}
            {this.props.error && (
              <p className="stock__error"> {this.props.error}</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stocks;
