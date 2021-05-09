import { UniversityModel } from "../../models/University/university.model"
import { GQLEditUniversity, GQLPostUniversity, IUniversityDoc } from "../../models/University/university.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(UniversityModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const UniversityResolver = {
  Query: {
    async fetchUniversities(_: any, prop: any): Promise<IUniversityDoc[]> {
      return await Fetch() as unknown as IUniversityDoc[]
    },
    async fetchUniversityByID(_: any, prop: any): Promise<IUniversityDoc> {
      return await FetchOne(prop._id) as unknown as IUniversityDoc
    }
  },

  Mutation: {
    async postUniversity(_: any, prop: GQLPostUniversity): Promise<IUniversityDoc> {
      return await Create(prop.UniversityInput) as unknown as IUniversityDoc
    },
    async editUniversity(_: any, prop: GQLEditUniversity): Promise<IUniversityDoc> {
      return await Edit(prop.UniversityEdit) as unknown as IUniversityDoc
    },
    async removeUniversity(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IUniversityDoc
    },
  }
}

export default UniversityResolver