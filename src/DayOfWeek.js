import createClass from 'create-react-class';
import React from 'react';

export default createClass({
  render() {
    return <th className="DayOfWeek">{this.props.date.format('dd')}</th>;
  },
});
