export const fetchTopics = (topics) => {
  console.log('actions', topics)
  return ({
    type: 'GET_TOPICS',
    topics: topics
  })
}

export const addTopics = (topic) => ({
  type: 'ADD_TOPIC',
  topic: topic

})
