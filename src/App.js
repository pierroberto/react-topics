import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { getTopics } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topics: []
    }
  }

  render() {
    return (
      <Form />

    );
  }
}

const mapStateToProps = (state) => ({
  topics: state.topics
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
