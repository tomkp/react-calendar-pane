import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DayOfWeek = (props) => {
  const { date, format } = props;

  return (
    <th className="DayOfWeek">
      {date.format(format)}
    </th>
  );
};

DayOfWeek.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  format: PropTypes.string,
};

export default DayOfWeek;
