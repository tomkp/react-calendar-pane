import React from 'react';


let DayOfWeek = React.createClass({
    render() {
        return <th className="DayOfWeek">{this.props.date.format('dd')}</th>
    }
});


module.exports = DayOfWeek;
