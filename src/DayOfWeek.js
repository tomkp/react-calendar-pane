import React from 'react';


export default React.createClass({
    render() {
        return <th className="DayOfWeek">{this.props.date.format('dd')}</th>
    }
});


