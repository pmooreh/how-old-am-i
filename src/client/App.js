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
  };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    this.intervalId = setInterval(() => {
      this.setState({elapsedTimeMs: moment().diff(this.startTime)})
    }, 50);
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { username } = this.state;
    return (
      <section className="section">
        <div className="content">
          <h1> Hello, {username}</h1>
          <Stopwatch />
          <Duration elapsedTimeMs={this.state.elapsedTimeMs} />
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
