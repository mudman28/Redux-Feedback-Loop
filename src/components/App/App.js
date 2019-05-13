import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import Feelings from '../Feelings/Feelings.js'
import Understanding from '../Understanding/Understanding.js'
import Support from '../Support/Support.js'
import Comments from '../Comments/Comments.js'
import Review from '../Review/Review.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path='/' 
              component={Feelings}
            />
          <Route exact path='/understanding' 
              component={Understanding}
            />
          <Route exact path='/support' 
              component={Support}
            />
          <Route exact path='/comments' 
              component={Comments}
            />
          <Route exact path='/review' 
              component={Review}
            />
          {/*  */}
        </div>
      </Router>
    );
  }
}

export default connect()(App);
