import React from "react";
import PropTypes from "prop-types";
import Digits from "digits.json";

export default class Divergence extends React.Component {
    static propTypes = {
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
    }

    mapDigitToNixie = (digit) => {
        switch (digit) {
            case ".":
                return "11";
            case " ":
                return "10";
            default:
                return digit.toString();
        }
    }

    render() {
        return (
            <div className="divergence-meter">
                { this.props.value.toString().split("").map((digit, index) => (
                    <img key={index} src={Digits[this.mapDigitToNixie(digit)]} />
                ))}
            </div>
        );
    }
}
