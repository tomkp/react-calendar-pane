import React from 'react';
import Calendar from '../src/Calendar';


var Example = React.createClass({

    render: function() {
        return (
            <Calendar />
        );
    }

});

React.render(<Example />, document.body);