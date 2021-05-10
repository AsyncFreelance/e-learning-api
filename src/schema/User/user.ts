import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchUsers: [UserDoc!]
  fetchUserByID(_id: String!): UserDoc
  fetchUserByStudentID(studentID: String!): UserDoc
  fetchUserEnrolledCourses(_id: String): [CourseDoc]
}

extend type Mutation {
  postUser(UserInput: UserInput!): UserDoc
  editUser(UserEdit: UserEdit!): UserDoc
  removeUser(_id: String!): UserDoc
  removeUsers: [UserDoc!]
  addCourseToUser(_id: String!, courseID: String!): UserDoc
  login(input: LoginInput!): UserDoc
}

type UserDoc {
  _id: String
  firstName: String
  enrolledCourses: [String]
  completedCourses: [String]
  lastName: String
  email: String
  password: String
  image: String
  userType: String
  externalID: String
  numberOfCoursesEnrolled: Int
  numberOfCoursesCompleted: Int
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input LoginInput {
  email: String!
  password: String!
}

input UserInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  userType: String!
  image: String!
  externalID: String
}

input UserEdit {
  _id: String!
  firstName: String
  lastName: String
  email: String
  password: String
  userType: String!
  image: String!
  externalID: String
  numberOfCoursesEnrolled: Int
  numberOfCoursesCompleted: Int
}
`