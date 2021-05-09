import { TeacherModel } from "../../models/Teacher/teacher.model"
import { GQLEditTeacher, GQLPostTeacher, ITeacherDoc } from "../../models/Teacher/teacher.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(TeacherModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const TeacherResolver = {
  Query: {
    async fetchTeachers(_: any, prop: any): Promise<ITeacherDoc[]> {
      return await Fetch() as unknown as ITeacherDoc[]
    },
    async fetchTeacherByID(_: any, prop: any): Promise<ITeacherDoc> {
      return await FetchOne(prop._id) as unknown as ITeacherDoc
    }
  },

  Mutation: {
    async postTeacher(_: any, prop: GQLPostTeacher): Promise<ITeacherDoc> {
      return await Create(prop.TeacherInput) as unknown as ITeacherDoc
    },
    async editTeacher(_: any, prop: GQLEditTeacher): Promise<ITeacherDoc> {
      return await Edit(prop.TeacherEdit) as unknown as ITeacherDoc
    },
    async removeTeacher(_: any, prop: any) {
      return await Remove(prop._id) as unknown as ITeacherDoc
    },
  }
}

export default TeacherResolver