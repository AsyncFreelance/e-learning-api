import { gql } from "apollo-server-express"
import Category from "./Category/category"
import University from "./University/university"
import EnrollmentRequest from "./EnrollmentRequest/enrollment_request"
import Enrollment from "./Enrollment/enrollment"
import Student from "./Student/student"
import Teacher from "./Teacher/teacher"
import Course from "./Course/course"
import Feedback from "./Feedback/feedback"
import Chapter from "./Chapter/chapter"
import Content from "./Content/content"
import User from "./User/user"

const Linker = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  type ErrorType {
    type: Int
    message: String
  }
`

export default [
  Linker, Category, University, EnrollmentRequest, Enrollment,
  Student, Teacher, Course, Feedback, Chapter, Content, User
]