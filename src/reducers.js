import { combineReducers } from 'redux';


// no change reducer for testing
const topics = (state=null,action) => {
  switch(action.type) {
      case 'GET_TOPICS':
      console.log('reducer', this.state)
      break;
  }

  return state

}


// Combining both reducers
const reducers = combineReducers({
  topics
});

export default reducers;
