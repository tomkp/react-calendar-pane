import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const DayOfWeek = ({date}) => <th className="DayOfWeek">{date.format('dd')}</th>;

DayOfWeek.propTypes = {
    date: PropTypes.instanceOf(moment).isRequired,
};

export default DayOfWeek;
