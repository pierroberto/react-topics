import React, { Component } from 'react';
import './form.css'

import ListView from './list-view';
 class Form extends Component {
   render () {
     return (
       <div className="wrapper">
         <div className="container">
          <div className="topic-bar">
            <div className="form">
              <input />
              <button>Send</button>

            </div>
          </div>
         </div>
         <ListView />
     </div>
     )
   }
 }

export default Form;
