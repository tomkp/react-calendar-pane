"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var DayOfWeek = React.createClass({
    displayName: "DayOfWeek",

    render: function render() {
        return React.createElement(
            "th",
            { className: "DayOfWeek" },
            this.props.date.format("dd")
        );
    }
});

module.exports = DayOfWeek;