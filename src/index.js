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
                { this.props.value.toString().split("").map((digit, index) => {
                    if (digit == ".") {
                        return <img key={index} src={Digits["11"]} />
                    }
                    return <TickDigit key={index} value={digit} />
                })}
            </div>
        );
    }
}

class TickDigit extends React.Component {
    static propTypes = {
        value: PropTypes.string
    }

    state = { current: (Math.floor(Math.random() * 10)).toString() }

    render() {
        let next_value;

        if (this.state.current != this.props.value) {
            if (this.state.current == "10") {
                next_value = "0";
            } else {
                next_value = (parseInt(this.state.current) + 1).toString();
            }
            setTimeout(() => this.setState({ current: next_value }), 50);
        }

        return (
            <img src={Digits[this.state.current]} />
        );
        
    }
}
