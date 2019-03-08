import React from 'react';
import moment from 'moment';

class Duration extends React.PureComponent {
  render = () => {
    const duration = moment.duration(this.props.elapsedTimeMs);
    const years = duration.years();
    const months = duration.months();
    const weeks = duration.weeks();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = String(duration.seconds());
    const milliseconds = String(duration.milliseconds()).padStart(3, '0');
    const secondsWithMs = seconds + '.' + milliseconds.slice(0,2);
    return (
      <div className="columns is-mobile">
        <div className="column has-text-right">
          <div className="title is-5">
            {years}
            <br />
            {months}
            <br />
            {weeks}
            <br />
            {days}
            <br />
            {hours}
            <br />
            {minutes}
            <br />
            {this.props.elapsedTimeMs > 0 ? secondsWithMs : '0'}
          </div>
        </div>
        <div className="column has-text-left">
          <div className="title is-5">
            years
            <br />
            months
            <br />
            weeks
            <br />
            days
            <br />
            hours
            <br />
            minutes
            <br />
            seconds
          </div>
        </div>
      </div>
    );
  };
}

export default Duration;
