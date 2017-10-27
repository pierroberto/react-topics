import { combineReducers } from 'redux';


// no change reducer for testing
const movies = (state=null,action) => {
  switch(action.type) {
      case 'GET_MOVIES':
      break;
  }

  return state

}


// Combining both reducers
const reducers = combineReducers({
  
});

export default reducers;
