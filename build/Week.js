"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Week = React.createClass({
    displayName: "Week",

    render: function render() {
        return React.createElement(
            "tr",
            null,
            this.props.children
        );
    }
});

module.exports = Week;