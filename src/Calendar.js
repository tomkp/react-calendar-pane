import React from 'react';
import moment from 'moment';
import Day from './Day';
import DayOfWeek from './DayOfWeek';
import Week from './Week';


let Calendar = React.createClass({

    propTypes: {
        onSelect: React.PropTypes.func.isRequired
    },

    getDefaultProps() {
        return {
            date: moment()
        }
    },

    getInitialState() {
        return {
            date: this.props.date
        }
    },

    handleClick(event) {
        var date = event.target.getAttribute('data-date');
        this.props.onSelect(date);
        this.setState({
            date: moment(date)
        });
    },

    previous() {
        this.setState({
            date: moment(this.state.date).subtract(1, 'month')
        });
    },

    next() {
        this.setState({
            date: moment(this.state.date).add(1, 'month')
        });
    },

    render() {
        let classes = ['Calendar', this.props.className].join(' ');

        let actionStyle = {
            cursor: 'pointer'
        };

        let date = this.state.date;
        const startOfWeekIndex = 0;
        let current = date.clone().startOf('month').day(startOfWeekIndex);
        let end = date.clone().endOf('month').day(7);
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
            let isCurrentMonth = current.isSame(date, 'month');
            days.push(
                <Day key={i++}
                    actual={date}
                    isCurrentMonth={isCurrentMonth}
                    date={current.clone()}
                    handleClick={this.handleClick} />
            );
            current.add(1, 'days');
            if (current.day() === 0) {
                let weekKey = 'week' + week++;
                elements.push(<Week key={weekKey}>{days}</Week>);
                days = [];
            }
        }
        return (
            <table className={classes}>
                <thead>
                    <tr>
                        <th className="previous" onClick={this.previous} style={actionStyle}>«</th>
                        <th colSpan="5">
                            <span className="month">{date.format('MMMM')}</span> <span className="year">{date.format('YYYY')}</span>
                        </th>
                        <th className="next" onClick={this.next} style={actionStyle}>»</th>
                    </tr>
                </thead>
                <thead>
                    <Week key="daysOfWeek">{daysOfWeek}</Week>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
        );
    }
});


export default Calendar;
