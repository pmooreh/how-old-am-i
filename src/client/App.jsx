import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EnterDatePage from './EnterDatePage';
import ShowAgePage from './ShowAgePage';

const N = () => <p>AHHHH!!! me :)</p>;

class App extends React.PureComponent {
  render = () => {
    return (
      <Router>
        <section className="section">
          <div className="content">
            <Route exact path="/" component={EnterDatePage} />
            <Route exact path="/show" component={ShowAgePage} />
          </div>
        </section>
      </Router>
    );
  };
}

export default App;
