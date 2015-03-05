"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var moment = _interopRequire(require("moment"));

var Day = _interopRequire(require("./Day"));

var DayOfWeek = React.createClass({
    displayName: "DayOfWeek",

    render: function render() {
        var classes = ["DayOfWeek"];
        return React.createElement(
            "th",
            { className: classes.join(" ") },
            this.props.date.format("dd")
        );
    }
});

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

var Calendar = React.createClass({
    displayName: "Calendar",

    propTypes: {
        onSelect: React.PropTypes.func.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        console.info("Calendar.getDefaultProps");
        return {
            date: moment()
        };
    },

    getInitialState: function getInitialState() {
        console.info("Calendar.getInitialState");
        return {
            date: this.props.date
        };
    },

    handleClick: function handleClick(event) {
        console.info("Calendar.handleClick", event);
        var date = event.target.getAttribute("data-date");
        this.props.onSelect(date);
        this.setState({
            date: moment(date)
        });
    },

    render: function render() {
        console.info("Calendar.render");
        var classes = ["Calendar", this.props.className].join(" ");

        var date = this.state.date;

        var startOfWeekIndex = 0;

        var current = date.clone().startOf("month").day(startOfWeekIndex);
        var end = date.clone().endOf("month").day(7);

        var elements = [];
        var days = [];
        var week = 1;
        var i = 1;

        var daysOfWeek = [];
        var day = current.clone();
        for (var j = 0; j < 7; j++) {
            var dayOfWeekKey = "dayOfWeek" + j;
            daysOfWeek.push(React.createElement(DayOfWeek, { key: dayOfWeekKey, date: day.clone() }));
            day.add(1, "days");
        }

        while (current.isBefore(end)) {
            days.push(React.createElement(Day, { key: i++,
                actual: this.state.date,
                date: current.clone(),
                handleClick: this.handleClick }));
            current.add(1, "days");
            if (current.day() === 0) {
                var weekKey = "week" + week++;
                elements.push(React.createElement(
                    Week,
                    { key: weekKey },
                    days
                ));
                days = [];
            }
        }

        return React.createElement(
            "table",
            { className: classes },
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    { colSpan: "7" },
                    React.createElement(
                        "span",
                        { className: "month" },
                        date.format("MMMM")
                    ),
                    " ",
                    React.createElement(
                        "span",
                        { className: "year" },
                        date.format("YYYY")
                    )
                )
            ),
            React.createElement(
                Week,
                { key: "daysOfWeek" },
                daysOfWeek
            ),
            elements
        );
    }
});

module.exports = Calendar;