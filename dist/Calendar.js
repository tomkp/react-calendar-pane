"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var moment = _interopRequire(require("moment"));

var Day = _interopRequire(require("./Day"));

var DayOfWeek = _interopRequire(require("./DayOfWeek"));

var Week = _interopRequire(require("./Week"));

var Calendar = React.createClass({
    displayName: "Calendar",

    propTypes: {
        onSelect: React.PropTypes.func.isRequired,
        date: React.PropTypes.object,
        month: React.PropTypes.object
    },

    getDefaultProps: function getDefaultProps() {
        return {
            month: moment()
        };
    },

    getInitialState: function getInitialState() {
        var date = this.props.date;
        var month = undefined;
        if (date) {
            month = this.props.date;
        } else {
            month = this.props.month;
        }
        return {
            date: date,
            month: month
        };
    },

    handleClick: function handleClick(event) {
        var date = event.target.getAttribute("data-date");
        this.props.onSelect(date);
        this.setState({
            date: moment(date)
        });
    },

    previous: function previous() {
        this.setState({
            month: moment(this.state.month).subtract(1, "month")
        });
    },

    next: function next() {
        this.setState({
            month: moment(this.state.month).add(1, "month")
        });
    },

    render: function render() {
        var classes = ["Calendar", this.props.className].join(" ");

        var actionStyle = {
            cursor: "pointer"
        };

        var today = moment();

        var date = this.state.date;
        var month = this.state.month;

        var startOfWeekIndex = 0;

        var current = month.clone().startOf("month").day(startOfWeekIndex);
        var end = month.clone().endOf("month").day(7);

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
            var isCurrentMonth = current.isSame(month, "month");
            days.push(React.createElement(Day, { key: i++,
                date: current.clone(),
                selected: date,
                month: month,
                today: today,
                isCurrentMonth: isCurrentMonth,
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
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { className: "previous", onClick: this.previous, style: actionStyle },
                        "«"
                    ),
                    React.createElement(
                        "th",
                        { colSpan: "5" },
                        React.createElement(
                            "span",
                            { className: "month" },
                            month.format("MMMM")
                        ),
                        " ",
                        React.createElement(
                            "span",
                            { className: "year" },
                            month.format("YYYY")
                        )
                    ),
                    React.createElement(
                        "th",
                        { className: "next", onClick: this.next, style: actionStyle },
                        "»"
                    )
                )
            ),
            React.createElement(
                "thead",
                null,
                React.createElement(
                    Week,
                    { key: "daysOfWeek" },
                    daysOfWeek
                )
            ),
            React.createElement(
                "tbody",
                null,
                elements
            )
        );
    }
});

module.exports = Calendar;