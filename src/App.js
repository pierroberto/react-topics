import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { fetchTopics } from './actions';
import ListView from './components/list-view';

class App extends Component {


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

  componentDidMount() {
    this.getTopics()
  }

  addTopic = () => {

  }

  render() {
    return (
      <div>
        <Form fullData={this.props.topics} onAddTopic={this.addTopic} />
        <ListView topics={this.props.topics.topics} />
      </div>

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
