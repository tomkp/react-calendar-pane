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

    render() {
        let classes = ['Calendar', this.props.className].join(' ');
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
            days.push(
                <Day key={i++}
                    actual={this.state.date}
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
                <tr>
                    <th colSpan="7">
                        <span className="month">{date.format('MMMM')}</span> <span className="year">{date.format('YYYY')}</span>
                    </th>
                </tr>
                <Week key="daysOfWeek">{daysOfWeek}</Week>
                {elements}
            </table>
        );
    }
});


export default Calendar;
