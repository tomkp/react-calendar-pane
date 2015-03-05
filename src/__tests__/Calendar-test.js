jest.dontMock('../Calendar');
//jest.dontMock('moment');

var moment = require('moment');
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Calendar = require('../Calendar');


describe('Calendar', function() {

    it('displays the correct month', function() {

        console.info('displays the correct month');

        var calendar = TU.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />
        );

        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).toEqual('April');

    });


    it('displays the correct year', function() {

        console.info('displays the correct year');

        var calendar = TU.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />
        );

        var month = TU.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).toEqual('2015');

    });


});