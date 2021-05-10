import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchEnrollments: [EnrollmentDoc!]
  fetchEnrollmentByID(_id: String!): EnrollmentDoc
}

extend type Mutation {
  postEnrollment(EnrollmentInput: EnrollmentInput!): EnrollmentDoc
  editEnrollment(EnrollmentEdit: EnrollmentEdit!): EnrollmentDoc
  removeEnrollment(_id: String!): EnrollmentDoc
  removeAllEnrollment: [EnrollmentDoc!]
}

type EnrollmentDoc {
  _id: String
  studentID: String
  courseID: String
  status: String
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input EnrollmentInput {
  studentID: String!
  courseID: String!
}

input EnrollmentEdit {
  _id: String!
  studentID: String
  courseID: String
  status: String
}
`