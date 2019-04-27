import React from 'react';
import { Link } from 'react-router-dom';
import querystring from 'querystring';
import moment from 'moment';
import AgeDisplay from './components/AgeDisplay';
import {
  makeVcard,
  normalizeTime,
} from './utils';

class ShowAgePage extends React.PureComponent {
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
    const encodedQueryString = this.props.location.search.substring(1);
    const data = querystring.parse(encodedQueryString);
    const birthDate = moment(data.time, 'x');
    const shareLink = '/show?' + querystring.stringify({
      ...data,
      who: 'Your friend',
    });
    const vcard = makeVcard(data.who, birthDate);
    console.log(shareLink);
    return (
      <React.Fragment>
        <AgeDisplay birthDate={birthDate} who={data.who} />
        <div className="has-text-centered">
          {data.who === undefined ? (
            <p>
              <a href={shareLink}>
                Share with a friend.
              </a>
            </p>
          ) : (
            <React.Fragment>
              <p>
                <a href={vcard.url} download={vcard.fileName}>
                  Add birthdate to contacts.
                </a>
              </p>
              <p>
                <a href="/">
                  Do yours.
                </a>
              </p>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  };
}

export default ShowAgePage;
