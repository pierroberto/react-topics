import React, { Component } from 'react';
import './form.css';
import { connect } from 'react-redux';
import ListView from './list-view';
 class Form extends Component {
   constructor (props) {
     super(props)
   }
   render () {
     console.log('prop', this.props)
     return (
       <div className="wrapper">
         <div className="container">
          <div className="topic-bar">
            <div className="form">
              <input />
              <button>Send</button>
              <p></p>
            </div>
          </div>
         </div>
         <ListView />
     </div>
     )
   }
 }

const mapStateToProps = (state) => ({
  topics: state.topics
 });
const mapDispatchToProps = (dispatch) => ({
  //addTopics: (topic) => dispatch(addTopics(topic))
 });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
