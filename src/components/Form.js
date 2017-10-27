import React, { Component } from 'react';
import './form.css';
import { connect } from 'react-redux';
import {addTopics} from '../actions'

export default class Form extends Component {
  constructor (props) {
    super(props)
  }

  addTopic = () => {

    this.props.onAddTopic();

  }

  render () {
     return (
       <div className="wrapper">
         <div className="container">
          <div className="topic-bar">
            <div className="form">
              <input />
              <button onClick={this.addTopic}>Send</button>
            </div>
          </div>
         </div>
     </div>
     )
   }
 }
