import { EnrollmentModel } from "../../models/Enrollment/enrollment.model"
import { GQLEditEnrollment, GQLPostEnrollment, IEnrollmentDoc } from "../../models/Enrollment/enrollment.types"
import DBWrapper from "../../wrappers/APIGenerator"
import UserResolver from "../User"

const { getAPICalls } = new DBWrapper(EnrollmentModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = getAPICalls()

const EnrollmentResolver = {
  Query: {
    async fetchEnrollments(_: any, prop: any): Promise<IEnrollmentDoc[]> {
      return await Fetch() as unknown as IEnrollmentDoc[]
    },
    async fetchEnrollmentByID(_: any, prop: any): Promise<IEnrollmentDoc> {
      return await FetchOne(prop._id) as unknown as IEnrollmentDoc
    }
  },

  Mutation: {
    async postEnrollment(_: any, prop: GQLPostEnrollment): Promise<IEnrollmentDoc> {
      const foundUser = await UserResolver.Query.fetchUserByStudentID({}, { studentID: prop.EnrollmentInput.studentID })
      if (foundUser.error) {
        return foundUser as any
      }
      await UserResolver.Mutation.addCourseToUser({}, { _id: foundUser._id, courseID: prop.EnrollmentInput.courseID })
      return await Create(prop.EnrollmentInput) as unknown as IEnrollmentDoc
    },
    async editEnrollment(_: any, prop: GQLEditEnrollment): Promise<IEnrollmentDoc> {
      return await Edit(prop.EnrollmentEdit) as unknown as IEnrollmentDoc
    },
    async removeEnrollment(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IEnrollmentDoc
    },
    async removeAllEnrollment(_: any, prop: any) {
      return await RemoveAll()
    }
  }
}

export default EnrollmentResolver