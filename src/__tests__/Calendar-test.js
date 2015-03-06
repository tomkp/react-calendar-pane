jest.dontMock('../Calendar');

var moment = require('moment');
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Calendar = require('../Calendar');


describe('Calendar', function() {

    var calendar = TU.renderIntoDocument(
        <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />
    );


    it('displays the correct month', function() {
        console.info('displays the correct month');
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).toEqual('April');
    });


    it('displays the correct year', function() {
        console.info('displays the correct year');
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).toEqual('2015');
    });


});