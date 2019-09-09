import React, { Component } from "react";

class FangStocks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="stock__info">
          <div>
            {this.props.fbSymbol && this.props.fbPrice && (
              <p className="stock__key">
                Facebook Stock Price:{" "}
                <span className="stock__value">
                  {this.props.fbSymbol} , ${this.props.fbPrice} per share{" "}
                </span>
              </p>
            )}
            {this.props.amznSymbol && this.props.amznPrice && (
              <p className="stock__key">
                Amazon Stock Price:{" "}
                <span className="stock__value">
                  {this.props.amznSymbol} , ${this.props.amznPrice} per share{" "}
                </span>
              </p>
            )}
            {this.props.aaplSymbol && this.props.aaplPrice && (
              <p className="stock__key">
                Apple Stock Price:{" "}
                <span className="stock__value">
                  {this.props.aaplSymbol} , ${this.props.aaplPrice} per share{" "}
                </span>
              </p>
            )}
            {this.props.nflxSymbol && this.props.nflxPrice && (
              <p className="stock__key">
                Netflix Stock Price:{" "}
                <span className="stock__value">
                  {this.props.nflxSymbol} , ${this.props.nflxPrice} per share{" "}
                </span>
              </p>
            )}
            {this.props.googSymbol && this.props.googPrice && (
              <p className="stock__key">
                Google Stock Price:{" "}
                <span className="stock__value">
                  {this.props.googSymbol} , ${this.props.googPrice} per share{" "}
                </span>
              </p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FangStocks;
