import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
  render() {
    const {
      today,
      date,
      selected,
      classes,
      handleClick,
      children,
    } = this.props;

    const classNames = ['Day'];
    if (today.isSame(date, 'day')) {
      classNames.push('today');
    }
    if (selected && selected.isSame(date, 'day')) {
      classNames.push('selected');
    }

    let body;
    if (!!children) {
      body = children;
    } else {
      body = (
        <button
          className="Day-inner"
          onClick={() => handleClick(date)}
          type="button"
        >
          {date.format('D')}
        </button>
      );
    }

    return (
      <td
        className={[...classNames, ...classes].join(' ')}
        data-date={date.toISOString()}
        data-day={date.format('D')}
      >
        {body}
      </td>
    );
  }
}

Day.propTypes = {
  handleClick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  selected: PropTypes.object,
  children: PropTypes.node,
};

export default Day;
