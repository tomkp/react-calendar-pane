import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Calendar from '../src/Calendar';
import asserter from './assertions/Asserter';
import chai from 'chai';

const expect = chai.expect;


describe('Calendar', () => {

    const onSelect = function(date) {
        //console.info('onSelect', date);
    };


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

        asserter(calendar).previousMonth().assertMonth('March');
    });


    it('should be able to go to next month', () => {
        const calendar = (
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
        );

        asserter(calendar).nextMonth().assertMonth('May');
    });


    it('should trigger the callback with selected date when clicking a day', function(done) {
        const callback = function(selectedDate) {
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

        asserter(calendar).clickDay(8).assertSelectedDay(8);
    });


    it('should add class to today', () => {
        const calendar = (
            <Calendar date={moment()} onSelect={onSelect} />
        );

        asserter(calendar).assertToday();
    });
});



