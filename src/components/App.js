import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { tick } from '../actions';

class App extends Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    const { tick } = this.props;
    setInterval(() => {
      tick();
    }, 1000);
  }


  render() {
    const { ticker } = this.props;
    return (
      <Router>
        <Fragment>
          <div className="main">
            <Switch>
              <Route path="/" exact component={() => <div>HELLO WORLD {ticker}</div>} />
              <Route component={() => <div>NOT FOUND</div>} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  let ticker = state.tick;
  return { ticker }
}

const mapDispatchToProps = dispatch => {
  return { 
    tick: () => { dispatch(tick()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
