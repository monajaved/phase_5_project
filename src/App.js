
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getJournals } from './actions/getJournals'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import ErrorPage from './components/Error'
import About from './components/About'
import List from './components/List'
import Form from './components/Form'

// import './App.css';

class App extends Component {

  componentDidMount (){
    this.props.getJournals();
  }
  render (){
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }


    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/journals" component={List} />
          <Route exact path="/journals/new" component={Form} />



          <Route component={ErrorPage}/>

        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }

}

export default connect(mapStateToProps, {getJournals})(App);
