import React from 'react';
import { Link } from 'react-router-dom';
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
        <h1>Hello,</h1>
        <div className="field buttons is-centered">
          <div className="control">
            <input
              className="input has-text-centered"
              type="text"
              value={this.state.epoch} 
              onChange={this.handleChange}
              placeholder={'when were you born?'}
            />
          </div>
        </div>
        <div className="buttons is-centered">
          {
            (this.getIsTimeValid()) ? (
              <Link className="button" to={this.getShowLink()}>
                View your age
              </Link>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default EnterDatePage;

