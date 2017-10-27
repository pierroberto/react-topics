import { combineReducers } from 'redux';

const defaultState = {
  topics: []
}
// no change reducer for testing
const topics = (state=defaultState,action) => {
  console.log('reducers', action.topics)
  switch(action.type) {
      case 'GET_TOPICS':
        // newState.topics = {...state.topics}
        // action.topics.forEach(topic => {
        //   newState.topics = topic
        // })
        return {
          ...state,
          topics: action.topics
        }

  }

  return state

}


// Combining both reducers
const reducers = combineReducers({
  topics
});

export default reducers;
