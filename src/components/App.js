import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header/Header'
import Home from './Home/Home'
import Form from './Form/Form'
import ThankYou from './ThankYou/ThankYou'
import NotFound from './NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mwg-app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-up" component={Form} />
            <Route path="/thank-you" component={ThankYou} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
