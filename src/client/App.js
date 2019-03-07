import React from 'react';
import moment from 'moment';
import ReactImage from './react.png';
import Stopwatch from './components/Stopwatch';
import Duration from './components/Duration';

export default class App extends React.Component {
  startTime = moment();

  state = {
    username: null,
    elapsedTimeMs: 0,
    input: '',
    startTime: undefined,
  };

  handleChange = event => {
    const input = event.target.value;
    const startTime = moment(input);
    this.setState({
      input,
      ...(startTime.isValid() ? {startTime} : {startTime: undefined}),
    });
  };

  componentDidMount = () => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    this.intervalId = setInterval(() => {
      this.setState({elapsedTimeMs: moment().diff(this.startTime)})
    }, 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { username } = this.state;
    return (
      <section className="section">
        <div className="content has-text-centered">
          <h1> Hello, {username}</h1>
          <div className="control">
            <input
              className="input has-text-centered"
              type="text"
              value={this.state.epoch} 
              onChange={this.handleChange}
              placeholder={'Enter your date of birth'}
            />
          </div>
          <Stopwatch />
          <Duration 
            elapsedTimeMs={
              this.state.startTime !== undefined
                ? moment().diff(this.state.startTime)
                : moment.duration(0)
            }
          />
          <div className="field">
            <p className="control">
              <span className="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </div>

          <div className="buttons">
            <a className="button is-primary">Primary</a>
            <a className="button is-link">Link</a>
          </div>
        </div>
        <img src={ReactImage} alt="react" />
      </section>
    );
  }
}
