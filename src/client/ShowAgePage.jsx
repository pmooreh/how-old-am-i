import React from 'react';
import querystring from 'querystring';
import moment from 'moment';
import D2 from './components/D2';

class ShowAgePage extends React.PureComponent {
  state = {
    currentTime: moment(),
  };

  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: moment() })
    }, 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  }

  render = () => {
    const encodedQueryString = this.props.location.search.substring(1);
    const data = querystring.parse(encodedQueryString);
    const birthDate = moment(data.time, "x");

    const elapsedTimeMs = this.state.currentTime.diff(birthDate);

    const duration = moment.duration(elapsedTimeMs);
    const years = duration.years();
    const months = duration.months();
    const weeks = duration.weeks();
    const days = duration.days() % 7;
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = String(duration.seconds());
    const milliseconds = String(duration.milliseconds()).padStart(3, '0');
    const secondsWithMs = seconds + '.' + milliseconds.slice(0,1);
    return (
      <div className="columns is-mobile">
        <div className="column is-one-third">
          <div className="has-text-left has-text-weight-bold">
            were<br />
            born<br />
            on<br />
            {birthDate.format('MMMM')}<br />
            {birthDate.format('Do')}<br />
            {birthDate.format('YYYY')},<br />
            a<br />
            {birthDate.format('dddd')}.<br />
          </div>
        </div>
        <div className="column is-one-third">
          <div className="has-text-right has-text-weight-bold">
            &nbsp;<br />
            {years}<br />
            {months}<br />
            {weeks}<br />
            {days}<br />
            {hours}<br />
            {minutes}<br />
            &nbsp;<br />
            {secondsWithMs}<br />
            &nbsp;<br />
          </div>
        </div>
        <div className="column is-one-third">
          <div className="has-text-left has-text-weight-bold">
            are<br />
            year{years != 1 ? 's' : ''}<br />
            month{months != 1 ? 's' : ''}<br />
            week{weeks != 1 ? 's' : ''}<br />
            day{days != 1 ? 's' : ''}<br />
            hour{hours != 1 ? 's' : ''}<br />
            minute{minutes != 1 ? 's' : ''}<br />
            and<br />
            seconds<br />
            old.<br />
          </div>
        </div>
      </div>
    );
  };
}

export default ShowAgePage;
