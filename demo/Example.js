import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../lib/Calendar.js';
import moment from 'moment';
import momentFr from 'moment/locale/fr';


var Example = React.createClass({

    onSelect: function (date, previousDate) {
        if (moment(date).isSame(previousDate)) {
            return false;
        }
        else if (moment().isSame(date, 'month')) {
            return true;
            console.info('onSelect', date);
        }
    },

    render: function() {
        let dayClasses = function (date) {
            let day = date.isoWeekday();
            if (day == 6 || day == 7) {
                return(['weekend'])
            }
            return([])
        };
        return (
            <div>
                <p>Calendar with weekend</p>
                <Calendar onSelect={this.onSelect} dayClasses={dayClasses}/>
                <p>Calendar without nav</p>
                <Calendar onSelect={this.onSelect} dayClasses={dayClasses} useNav={false}/>
                <p>French calendar</p>
                <Calendar onSelect={this.onSelect} dayClasses={dayClasses} locale="fr" startOfWeekIndex={1}/>
            </div>
        );
    }

});

ReactDOM.render(<Example />, document.getElementById("container"));
