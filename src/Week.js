import createClass from 'create-react-class';
import React from 'react';

export default createClass({
  render() {
    return <tr className="Week">{this.props.children}</tr>;
  },
});
