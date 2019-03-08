import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import ReactImage from './react.png';
import Stopwatch from './components/Stopwatch';

class EnterDatePage extends React.Component {
  startTime = moment();

  state = {
    username: null,
    elapsedTimeMs: 0,
    input: '',
    startTime: undefined,
  };

  getIsTimeValid = () => this.state.startTime && this.state.startTime.isValid();

  getShowLink = () => {
    return '/show?time=' + this.state.startTime.valueOf();
  };

  handleChange = event => {
    const input = event.target.value;
    const startTime = moment(input);
    this.setState({ input, startTime });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="has-text-centered">
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
        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons is-centered">
          {
            (this.getIsTimeValid()) ? (
              <Link className="button" to={this.getShowLink()}>
                View your age
              </Link>
            ) : null
          }
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    );
  }
}

export default EnterDatePage;

