import React from 'react';


let DayOfWeek = React.createClass({
    render() {
        return <th className="DayOfWeek">{this.props.date.format('dd')}</th>
    }
});


export default DayOfWeek;
