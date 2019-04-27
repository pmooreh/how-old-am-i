import React from 'react';
import { Link } from 'react-router-dom';
import querystring from 'querystring';
import moment from 'moment';
import { normalizeTime } from '../utils';

class AgeDisplay extends React.PureComponent {
  state = {
    currentTime: moment(),
  };

  componentDidMount = () => {
    console.log(this.props);
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: moment() })
    }, 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render = () => {
    const { birthDate, who } = this.props;
    const elapsedTimeMs = this.state.currentTime.diff(birthDate);
    const normalizedTime = normalizeTime(elapsedTimeMs);

    return (
      <React.Fragment>
        <div className="is-size-1 has-text-weight-bold has-text-centered">
          {who || 'You'}
        </div>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <div className="has-text-right has-text-weight-bold">
              {who === undefined ? 'were' : 'was'}<br />
              born<br />
              on<br />
              {birthDate.format('MMMM')}<br />
              {birthDate.format('Do')},<br />
              {birthDate.format('Y')}.<br />
              It<br />
              was<br />
              a<br />
              {birthDate.format('dddd')}.<br />
            </div>
          </div>
          <div className="column is-one-third">
            <div className="has-text-right has-text-weight-bold">
              &nbsp;<br />
              {normalizedTime.years}<br />
              {normalizedTime.months}<br />
              {normalizedTime.weeks}<br />
              {normalizedTime.days}<br />
              {normalizedTime.hours}<br />
              {normalizedTime.minutes}<br />
              &nbsp;<br />
              {normalizedTime.secondsWithMs}<br />
              &nbsp;<br />
            </div>
          </div>
          <div className="column is-one-third">
            <div className="has-text-left has-text-weight-bold">
              {who === undefined ? 'are' : 'is'}<br />
              year{normalizedTime.years != 1 ? 's' : ''}<br />
              month{normalizedTime.months != 1 ? 's' : ''}<br />
              week{normalizedTime.weeks != 1 ? 's' : ''}<br />
              day{normalizedTime.days != 1 ? 's' : ''}<br />
              hour{normalizedTime.hours != 1 ? 's' : ''}<br />
              minute{normalizedTime.minutes != 1 ? 's' : ''}<br />
              and<br />
              seconds<br />
              old.<br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default AgeDisplay;
