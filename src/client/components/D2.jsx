import React from 'react';
import moment from 'moment';

class D2 extends React.PureComponent {
  render = () => {
    const duration = moment.duration(this.props.elapsedTimeMs);
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
        </div>
        <div className="column is-one-third">
          <div className="has-text-right has-text-weight-bold is-5">
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
          <div className="has-text-left has-text-weight-bold is-5">
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

export default D2;
