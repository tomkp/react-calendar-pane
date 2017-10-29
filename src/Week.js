import React, { Component } from 'react';

class Week extends Component {
  render() {
    return <tr className="Week">{this.props.children}</tr>;
  }
}

export default Week;
