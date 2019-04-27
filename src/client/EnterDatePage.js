import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import querystring from 'querystring';
import ReactImage from './react.png';
import Stopwatch from './components/Stopwatch';

class EnterDatePage extends React.Component {

  state = {
    username: null,
    elapsedTimeMs: 0,
    input: '',
    birthDate: undefined,
  };

  getIsTimeValid = () => this.state.birthDate && this.state.birthDate.isValid();

  getShowLink = () => {
    return '/show?' + querystring.stringify({time: this.state.birthDate.valueOf()});
  };

  handleChange = event => {
    const input = event.target.value;
    const birthDate = moment(input);
    this.setState({ input, birthDate });
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
              placeholder={'Enter your birthday.'}
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

