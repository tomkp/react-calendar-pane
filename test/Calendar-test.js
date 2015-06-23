import moment from 'moment';
import React from 'react/addons';
import Calendar from '../src/Calendar';
import Asserter from './assertions/Asserter';
import chai from 'chai';

const { TestUtils } = React.addons;
const expect = chai.expect;


describe('Calendar', () => {

    const onSelect = function(date) {
        //console.info('onSelect', date);
    };


    it('displays the correct year', () => {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
        );

        new Asserter(calendar).assertYear('2015');
    });


    it('displays the correct month', () => {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
        );

        new Asserter(calendar).assertMonth('April');
    });


    it('should be able to go to previous month', () => {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
        );

        new Asserter(calendar).previousMonth().assertMonth('March');
    });


    it('should be able to go to next month', () => {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={onSelect} />
        );

        new Asserter(calendar).nextMonth().assertMonth('May');
    });


    it('should trigger the callback with selected date when clicking a day', function(done) {
        const callback = function(selectedDate) {
            expect(moment(selectedDate).format('DD/MM/YYYY')).to.equal('08/04/2015');
            done();
        };

        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment('03/04/2015', 'DD/MM/YYYY')} onSelect={callback} />
        );

        new Asserter(calendar).clickDay(8);
    });


    it('should set selected date to selected', () => {
        const date = moment('03/04/2015', 'DD/MM/YYYY');
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={ date} onSelect={onSelect} />
        );

        new Asserter(calendar).clickDay(8).assertSelectedDay(8);
    });


    it('should add class to today', () => {

    });
});



