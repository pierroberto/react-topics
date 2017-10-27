import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { fetchTopics } from './actions';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topics: []
    }
    this.ComponentDidMount();
  }

  getTopics () {
    fetch('http://localhost:3000/letter', {
    	method: 'get'
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log('data', data)
      this.props.fetchTopics(data)
    })
  }

  ComponentDidMount() {
    this.getTopics()
  }

  render() {
    console.log('get', this.getTopics())
    return (
      <Form fullData={this.getTopics()}>
      </Form>

    );
  }
}

const mapStateToProps = (state) => ({
  topics : state.topics
});
const mapDispatchToProps = (dispatch) => ({
  fetchTopics: (data) => dispatch(fetchTopics(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
