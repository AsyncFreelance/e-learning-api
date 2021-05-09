import { UserModel } from "../../models/User/user.model"
import { GQLEditUser, GQLPostUser, IUserDoc, EnrollCourse, GQLLoginInput } from "../../models/User/user.types"
import DBWrapper from "../../wrappers/APIGenerator"
import CourseResolver from "../Course"

const { getAPICalls } = new DBWrapper(UserModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const UserResolver = {
  Query: {
    async fetchUsers(_: any, prop: any): Promise<IUserDoc[]> {
      return await Fetch() as unknown as IUserDoc[]
    },
    async fetchUserByID(_: any, prop: any): Promise<IUserDoc> {
      return await FetchOne(prop._id) as unknown as IUserDoc
    },
    async fetchUserEnrolledCourses(_: any, prop: any): Promise<IUserDoc[]> {
      const AllCourses = await CourseResolver.Query.fetchCourses({}, {})
      const user = await UserResolver.Query.fetchUserByID({}, { _id: prop._id })
      if (user.error) {
        return []
      }
      return AllCourses.filter(course => {
        const foundIndex = user.enrolledCourses.findIndex(courseID => String(courseID) === String(course._id))
        return foundIndex >= 0
      }) as any[]
    },
  },

  Mutation: {
    async postUser(_: any, prop: GQLPostUser): Promise<IUserDoc> {
      return await Create(prop.UserInput) as unknown as IUserDoc
    },
    async editUser(_: any, prop: GQLEditUser): Promise<IUserDoc> {
      return await Edit(prop.UserEdit) as unknown as IUserDoc
    },
    async removeUser(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IUserDoc
    },
    async addCourseToUser(_: any, prop: EnrollCourse): Promise<IUserDoc> {
      const foundUser = await UserResolver.Query.fetchUserByID({}, { _id: prop._id })
      if (foundUser.error) {
        return foundUser
      }
      const foundCourseIndex = foundUser.enrolledCourses.findIndex(courseID => String(courseID) === String(prop.courseID))
      if (foundCourseIndex >= 0) {
        return foundUser
      } else {
        const enrolledCourses = foundUser.enrolledCourses.concat(prop.courseID)
        return await Edit({
          _id: prop._id,
          enrolledCourses
        })
      }
    },
    async login(_: any, prop: GQLLoginInput) {
      const foundUser = await FetchOne(prop.email, "email") as IUserDoc
      if (foundUser.error) {
        return foundUser
      } else {
        if (foundUser.password === prop.password) {
          return foundUser
        } else {
          return {
            error: {
              type: 400,
              message: "Incorrect username or password"
            }
          }
        }
      }
    }
  }
}

export default UserResolver