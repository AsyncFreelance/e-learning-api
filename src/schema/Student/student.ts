import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchStudents: [StudentDoc!]
  fetchStudentByID(_id: String!): StudentDoc
}

extend type Mutation {
  postStudent(StudentInput: StudentInput!): StudentDoc
  editStudent(StudentEdit: StudentEdit!): StudentDoc
  removeStudent(_id: String!): StudentDoc
}

type StudentDoc {
  _id: String
  firstName: String
  lastName: String
  email: String
  numberOfCoursesEnrolled: Int
  numberOfCoursesCompleted: Int
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input StudentInput {
  firstName: String!
  lastName: String!
  email: String!
}

input StudentEdit {
  _id: String!
  firstName: String
  lastName: String
  email: String
  numberOfCoursesEnrolled: Int
  numberOfCoursesCompleted: Int
}
`