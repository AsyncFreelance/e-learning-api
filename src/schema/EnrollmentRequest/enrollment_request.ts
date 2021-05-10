import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchEnrollmentRequests: [EnrollmentRequestDoc!]
  fetchEnrollmentRequestByID(_id: String!): EnrollmentRequestDoc
}

extend type Mutation {
  postEnrollmentRequest(EnrollmentRequestInput: EnrollmentRequestInput!): EnrollmentRequestDoc
  editEnrollmentRequest(EnrollmentRequestEdit: EnrollmentRequestEdit!): EnrollmentRequestDoc
  removeEnrollmentRequest(_id: String!): EnrollmentRequestDoc
  removeEnrollmentRequests: [EnrollmentRequestDoc!]
}

type EnrollmentRequestDoc {
  _id: String
  studentID: String
  courseID: String
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input EnrollmentRequestInput {
  studentID: String
  courseID: String
}

input EnrollmentRequestEdit {
  _id: String!
  studentID: String
  courseID: String
}
`