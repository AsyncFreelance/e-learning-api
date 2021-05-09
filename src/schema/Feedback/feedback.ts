import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchFeedbacks: [FeedbackDoc!]
  fetchFeedbackByID(_id: String!): FeedbackDoc
}

extend type Mutation {
  postFeedback(FeedbackInput: FeedbackInput!): FeedbackDoc
  editFeedback(FeedbackEdit: FeedbackEdit!): FeedbackDoc
  removeFeedback(_id: String!): FeedbackDoc
}

type FeedbackDoc {
  _id: String
  courseID: String
  content: String
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input FeedbackInput {
  courseID: String!
  content: String!
}

input FeedbackEdit {
  _id: String!
  courseID: String!
  content: String!
}
`