import React, { Component } from 'react';
import './list-view.css';
import ItemView from './item-view.js';
 class ListView extends Component {
   render () {
     return (
      <div className="box">
       <ItemView />
      </div>
     )
   }
 }

export default ListView;
