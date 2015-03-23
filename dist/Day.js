"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Day = React.createClass({
    displayName: "Day",

    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        date: React.PropTypes.object.isRequired,
        month: React.PropTypes.object.isRequired,
        today: React.PropTypes.object.isRequired,
        selected: React.PropTypes.object
    },

    render: function render() {
        var classes = ["Day"];
        if (this.props.today.isSame(this.props.date, "day")) {
            classes.push("today");
        }
        if (this.props.selected && this.props.selected.isSame(this.props.date, "day")) {
            classes.push("selected");
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