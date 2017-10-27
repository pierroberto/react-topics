import React, { Component } from 'react';
import './list-view.css';
import ItemView from './item-view.js';
 class ListView extends Component {
   getItems () {
     return this.props.topics.map(topic => {
       return (
        <ItemView topic={topic} />
       )
     });
   }
   render () {


     return (
      <div className="box">
        {this.getItems()}
      </div>
     )
   }
 }

export default ListView;
