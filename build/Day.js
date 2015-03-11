"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Day = React.createClass({
    displayName: "Day",

    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        date: React.PropTypes.object.isRequired,
        actual: React.PropTypes.object.isRequired
    },

    render: function render() {
        var classes = ["Day"];
        if (this.props.actual.isSame(this.props.date, "day")) {
            classes.push("actual");
        }
        var style = {
            cursor: "pointer"
        };
        if (!this.props.isCurrentMonth) {
            classes.push("other-month");
        }
        return React.createElement(
            "td",
            { className: classes.join(" "),
                style: style,
                "data-date": this.props.date.toISOString(),
                onClick: this.props.handleClick },
            this.props.date.format("D")
        );
    }
});

module.exports = Day;