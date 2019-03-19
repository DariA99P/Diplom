import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  state = {
    dateTime: moment.utc().format('ddd DD MMM HH:mm'),
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      dateTime: moment.utc().format('ddd DD MMM HH:mm'),
    });
  }

  render() {
    const { dateTime } = this.state;

    return (
      <span>{dateTime}</span>
    );
  }
}

export default Clock;
