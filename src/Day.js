import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import React from 'react';

export default createClass({
  propTypes: {
    handleClick: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
    //month: React.PropTypes.object.isRequired,
    today: PropTypes.object.isRequired,
    selected: PropTypes.object,
    children: PropTypes.node,
  },

  render() {
    let classes = ['Day'];
    if (this.props.today.isSame(this.props.date, 'day')) {
      classes.push('today');
    }
    if (
      this.props.selected &&
      this.props.selected.isSame(this.props.date, 'day')
    ) {
      classes.push('selected');
    }
    classes = classes.concat(this.props.classes);

    let body;
    if (!!this.props.children) {
      body = this.props.children;
    } else {
      body = (
        <button
          className="Day-inner"
          onClick={() => this.props.handleClick(this.props.date)}
          type="button"
        >
          {this.props.date.format('D')}
        </button>
      );
    }

    return (
      <td
        className={classes.join(' ')}
        data-date={this.props.date.toISOString()}
        data-day={this.props.date.format('D')}
      >
        {body}
      </td>
    );
  },
});
