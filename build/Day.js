"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Day = React.createClass({
    displayName: "Day",

    render: function render() {
        var classes = ["Day"];
        if (this.props.actual.isSame(this.props.date, "day")) {
            classes.push("actual");
        }
        return React.createElement(
            "td",
            { className: classes.join(" "),
                "data-date": this.props.date.toISOString(),
                onClick: this.props.handleClick },
            this.props.date.format("D")
        );
    }
});

module.exports = Day;