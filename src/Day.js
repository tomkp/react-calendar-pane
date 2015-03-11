import React from 'react';


let Day = React.createClass({

    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        date: React.PropTypes.object.isRequired,
        actual: React.PropTypes.object.isRequired
    },

    render() {
        let classes = ['Day'];
        if (this.props.actual.isSame(this.props.date, 'day')) {
            classes.push('actual');
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
