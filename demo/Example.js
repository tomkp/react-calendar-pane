import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../lib/Calendar.js';


var Example = React.createClass({

    onSelect: function (date) {
        console.info('onSelect', date);
    },

    render: function() {
        return (
            <Calendar onSelect={this.onSelect} />
        );
    }

});

ReactDOM.render(<Example />, document.getElementById("container"));