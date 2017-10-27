export const fetchTopics = (topics) => ({
  type: 'GET_TOPICS',
  topics: topics
})

export const addTopics = (topic) => ({
  type: 'ADD_TOPIC',
  topic: topic

})
