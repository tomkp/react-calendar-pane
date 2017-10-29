import React, { Component } from 'react';

class Week extends Component {
  render() {
    return <th className="DayOfWeek">{this.props.date.format('dd')}</th>;
  }
}

export default Week;
