import React from 'react';
import moment from 'moment';
import Day from './Day';
import DayOfWeek from './DayOfWeek';
import Week from './Week';


export default React.createClass({

    propTypes: {
        onSelect: React.PropTypes.func.isRequired,
        date: React.PropTypes.object,
        month: React.PropTypes.object,
        dayClasses: React.PropTypes.func,
        useNav: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            month: moment(),
            dayClasses: function() { return [] },
            useNav: true,
        }
    },

    getInitialState() {
        let date = this.props.date;
        let month;
        if (date) {
            month = this.props.date;
        } else {
            month = this.props.month;
        }
        return {
            date: date,
            month: month
        }
    },

    handleClick(date) {
        if (this.props.onSelect(date) !== false) {
            this.setState({
                date: moment(date)
            });
        }
    },

    previous() {
        this.setState({
            month: moment(this.state.month).subtract(1, 'month')
        });
    },

    next() {
        this.setState({
            month: moment(this.state.month).add(1, 'month')
        });
    },

    render() {
        let classes = ['Calendar', this.props.className].join(' ');

        let actionStyle = {
            cursor: 'pointer'
        };

        let today = moment();

        let date = this.state.date;
        let month = this.state.month;

        const startOfWeekIndex = 0;

        let current = month.clone().startOf('month').day(startOfWeekIndex);
        let end = month.clone().endOf('month').day(7);

        let elements = [];
        let days = [];
        let week = 1;
        let i = 1;
        let daysOfWeek = [];
        let day = current.clone();
        for (let j = 0; j < 7; j++) {
            let dayOfWeekKey = 'dayOfWeek' + j;
            daysOfWeek.push(<DayOfWeek key={dayOfWeekKey} date={day.clone()} />);
            day.add(1, 'days');
        }
        while (current.isBefore(end)) {
            let dayClasses = this.props.dayClasses(current);
            if (!current.isSame(month, 'month')) {
                dayClasses = dayClasses.concat(['other-month']);
            }
            let isCurrentMonth = current.isSame(month, 'month');
            days.push(
                <Day key={i++}
                    date={current.clone()}
                    selected={date}
                    month={month}
                    today={today}
                    classes={dayClasses}
                    handleClick={this.handleClick} />
            );
            current.add(1, 'days');
            if (current.day() === 0) {
                let weekKey = 'week' + week++;
                elements.push(<Week key={weekKey}>{days}</Week>);
                days = [];
            }
        }

        let nav

        if (this.props.useNav) {
          nav = (
              <tr className="month-header">
                  <th className="previous" onClick={this.previous} style={actionStyle}>«</th>
                  <th colSpan="5">
                      <span className="month">{month.format('MMMM')}</span> <span className="year">{month.format('YYYY')}</span>
                  </th>
                  <th className="next" onClick={this.next} style={actionStyle}>»</th>
              </tr>
          )
        }
        else {
          nav = (
              <tr className="month-header">
                  <th colSpan="7">
                      <span className="month">{month.format('MMMM')}</span> <span className="year">{month.format('YYYY')}</span>
                  </th>
              </tr>
          )
        }

        return (
            <table className={classes}>
                <thead>
                    {nav}
                </thead>
                <thead>
                    <tr className="days-header">{daysOfWeek}</tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
        );
    }
});
