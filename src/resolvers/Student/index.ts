import { StudentModel } from "../../models/Student/student.model"
import { GQLEditStudent, GQLPostStudent, IStudentDoc } from "../../models/Student/student.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(StudentModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const StudentResolver = {
  Query: {
    async fetchStudents(_: any, prop: any): Promise<IStudentDoc[]> {
      return await Fetch() as unknown as IStudentDoc[]
    },
    async fetchStudentByID(_: any, prop: any): Promise<IStudentDoc> {
      return await FetchOne(prop._id) as unknown as IStudentDoc
    }
  },

  Mutation: {
    async postStudent(_: any, prop: GQLPostStudent): Promise<IStudentDoc> {
      return await Create(prop.StudentInput) as unknown as IStudentDoc
    },
    async editStudent(_: any, prop: GQLEditStudent): Promise<IStudentDoc> {
      return await Edit(prop.StudentEdit) as unknown as IStudentDoc
    },
    async removeStudent(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IStudentDoc
    },
  }
}

export default StudentResolver