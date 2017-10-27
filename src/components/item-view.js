import React, { Component } from 'react';
import './item-view.css';
 class ItemView extends Component {
   render () {
     return (
      <div className="container-topic">

        <div>{this.props.topic.message}</div>
      </div>
     )
   }
 }

export default ItemView;
