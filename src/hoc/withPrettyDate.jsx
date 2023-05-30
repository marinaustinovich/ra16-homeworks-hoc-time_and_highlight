import React from 'react';

const withPrettyDate = (Component, formatFunction) => {
    
    return class extends React.Component {
        state = {
            afterPrettyDate: this.props.date,
            date: formatFunction(this.props.date),
        };

        render() { 
            return <Component {...this.props} date={this.state.date}></Component>;
        }
    };
};

export default withPrettyDate;
