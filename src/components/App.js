import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import * as FormActionsCreators from '../actions/form'

import Header from './Header/Header'
import Home from './Home/Home'
import Form from './Form/Form'
import ThankYou from './ThankYou/ThankYou'
import NotFound from './NotFound/NotFound'

class App extends Component {

  render() {

    const { dispatch } = this.props,
          formData = this.props.state,
          formSubmit = bindActionCreators(FormActionsCreators.formSubmit, dispatch);

    return (
        <BrowserRouter>

          <div className="mwg-app">

            <Header />

            <Switch>

              <Route exact path="/" component={Home} />
              <Route 
                path="/sign-up" 
                component={() => <Form formData={formData} formSubmit={formSubmit} />} />
              <Route 
                path="/thank-you" 
                component={() => <ThankYou fName={formData.fieldValues.fname} lName={formData.fieldValues.lname}/>} />
              <Route component={NotFound} />

            </Switch>

          </div>

        </BrowserRouter>
        
    );

  }
  
}

const mapStateToProps = state => {
  return (
    {
      state: state
    }
  )
}

export default connect(mapStateToProps)(App);