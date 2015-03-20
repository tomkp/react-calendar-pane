import React from 'react';


let Day = React.createClass({

    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        date: React.PropTypes.object.isRequired,
        active: React.PropTypes.object.isRequired,
        today: React.PropTypes.object.isRequired
    },

    render() {
        let classes = ['Day'];
        //console.info('today', this.props.today.format('DD/MM/YYYY'));
        if (this.props.today.isSame(this.props.date, 'day')) {
            classes.push('today');
        }
        if (this.props.active.isSame(this.props.date, 'day')) {
            classes.push('active');
        }
        let style = {
            cursor: 'pointer'
        };
        if (!this.props.isCurrentMonth) {
            classes.push('other-month');
        }
        return (
            <td className={classes.join(' ')}
                style={style}
                data-date={this.props.date.toISOString()}
                onClick={this.props.handleClick}>
                {this.props.date.format('D')}
            </td>
        );
    }
});


export default Day;
