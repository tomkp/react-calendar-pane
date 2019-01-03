import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DayOfWeek = ({ date }) => (
  <th className="DayOfWeek">{date.format(format)}</th>
);

DayOfWeek.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  format: PropTypes.string,
};

export default DayOfWeek;
