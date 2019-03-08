import React from 'react';

class Stopwatch extends React.PureComponent {
  startTime = new Date();

  state = {
    elapsedTime: this.startTime,
  };

  componentDidMount = () => {
    this.intervalId = setInterval(() => this.setState({elapsedTime: new Date((new Date()) - this.startTime)}), 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render = () => (
    <h2>
      You have been on this page for:
      {' '}
      <span className="is-family-monospace">
        {this.state.elapsedTime.getSeconds()}
        {'.'}
        {Math.floor((this.state.elapsedTime.getMilliseconds() / 100))}
        {Math.floor((this.state.elapsedTime.getMilliseconds() / 10)) % 10}
      </span>
      {' '}
      seconds.
    </h2>
  );
}

export default Stopwatch;
