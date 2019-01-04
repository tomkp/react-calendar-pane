import 'core-js/es6/map';
import 'core-js/es6/set';

import moment from 'moment';
import React from 'react';
import Calendar from '../src/Calendar';
import asserter from './assertions/Asserter';
import chai from 'chai';

const expect = chai.expect;

describe('Calendar', () => {
  const onSelect = () => true;

  it('displays the correct year', () => {
    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
    );

    asserter(calendar).assertYear('2015');
  });

  it('displays the correct month', () => {
    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
    );

    asserter(calendar).assertMonth('April');
  });

  it('should be able to go to previous month', () => {
    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
    );

    asserter(calendar)
      .previousMonth()
      .assertMonth('March');
  });

  it('should be able to go to next month', () => {
    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
    );

    asserter(calendar)
      .nextMonth()
      .assertMonth('May');
  });

  it('should trigger the callback with selected date when clicking a day', done => {
    const callback = selectedDate => {
      expect(moment(selectedDate).format('DD/MM/YYYY')).to.equal('08/04/2015');
      done();
    };

    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={callback} />
    );

    asserter(calendar).clickDay(8);
  });

  it('should set selected date to selected', () => {
    const calendar = (
      <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
    );

    asserter(calendar)
      .clickDay(8)
      .assertSelectedDay(8);
  });

  it('should add class to today', () => {
    const calendar = <Calendar date={moment()} onSelect={onSelect} />;

    asserter(calendar).assertToday();
  });

  it("day of week format defaults to 'dd' when format is invalid", () => {
    const formats = ['', null];

    formats.forEach((format) => {
      const calendar = (
        <Calendar date={moment()} onSelect={onSelect} dayOfWeekFormat={format} />
      );
  
      asserter(calendar).assertDayOfTheWeek(format);
    });
  });

  it('displays day of the week following a given format', () => {
    const formats = ['d', 'dd', 'ddd', 'dddd'];

    formats.forEach((format) => {
      const calendar = (
        <Calendar date={moment()} onSelect={onSelect} dayOfWeekFormat={format} />
      );
  
      asserter(calendar).assertDayOfTheWeek(format);
    });
  });
});
