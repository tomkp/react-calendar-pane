import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import React from 'react';
import moment from 'moment';
import Day from './Day';
import DayOfWeek from './DayOfWeek';
import Week from './Week';


export default createClass({

    propTypes: {
        onSelect: PropTypes.func.isRequired,
        date: PropTypes.object,
        month: PropTypes.object,
        dayClasses: PropTypes.func,
        useNav: PropTypes.bool,
        locale: PropTypes.string,
        startOfWeekIndex: PropTypes.number,
        dayRenderer: PropTypes.func
    },

    getDefaultProps() {
        return {
            month: moment(),
            dayClasses: function() { return [] },
            useNav: true,
            locale: 'en',
            startOfWeekIndex: 0
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

    componentWillMount() {
        moment.locale(this.props.locale);

        if (!!this.state.date) {
          this.state.date.locale(this.props.locale)
        }

        this.state.month.locale(this.props.locale)
    },

    componentWillUpdate(nextProps, nextState) {
        moment.locale(this.props.locale);

        if (!!nextState.date) {
          nextState.date.locale(this.props.locale)
        }

        nextState.month.locale(this.props.locale)
    },

    handleClick(date) {
        let flag = this.props.onSelect(date, this.state.date, this.state.month);

        if (flag === true) {
            this.setState({
                date: moment(date)
            });
        }
        else if (flag === false) {
          this.setState({
            date: null
          })
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
        const { startOfWeekIndex, dayRenderer } = this.props;

        let classes = ['Calendar', this.props.className].join(' ');

        let today = moment();

        let date = this.state.date;
        let month = this.state.month;

        let current = month.clone().startOf('month').day(startOfWeekIndex);
        if (current.date() > 1 && current.date() < 7) {
            current.subtract(7, 'd');
        }

        let end = month.clone().endOf('month').day(7 + startOfWeekIndex);
        if (end.date() > 7) {
            end.subtract(7, 'd');
        }

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
            let props = {
                date: current.clone(),
                selected: date,
                month: month,
                today: today,
                classes: dayClasses,
                handleClick: this.handleClick,
            }

            let children
            if (!!dayRenderer) {
                children = dayRenderer(props);
            }

            days.push(
                <Day key={i++} {...props}>
                    {children}
                </Day>
            );
            current.add(1, 'days');
            if (current.day() === startOfWeekIndex) {
                let weekKey = 'week' + week++;
                elements.push(<Week key={weekKey}>{days}</Week>);
                days = [];
            }
        }

        let nav

        if (this.props.useNav) {
          nav = (
              <tr className="month-header">
                  <th className="nav previous">
                      <button className="nav-inner" onClick={this.previous} type="button">«</button>
                  </th>
                  <th colSpan="5">
                      <span className="month">{month.format('MMMM')}</span> <span className="year">{month.format('YYYY')}</span>
                  </th>
                  <th className="nav next">
                      <button className="nav-inner" onClick={this.next} type="button">»</button>
                  </th>
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
