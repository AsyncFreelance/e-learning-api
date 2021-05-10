import { EnrollmentRequestModel } from "../../models/EnrollmentRequest/enrollment_request.model"
import { GQLEditEnrollmentRequest, GQLPostEnrollmentRequest, IEnrollmentRequestDoc } from "../../models/EnrollmentRequest/enrollment_request.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(EnrollmentRequestModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = getAPICalls()

const EnrollmentRequestResolver = {
  Query: {
    async fetchEnrollmentRequests(_: any, prop: any): Promise<IEnrollmentRequestDoc[]> {
      return await Fetch() as unknown as IEnrollmentRequestDoc[]
    },
    async fetchEnrollmentRequestByID(_: any, prop: any): Promise<IEnrollmentRequestDoc> {
      return await FetchOne(prop._id) as unknown as IEnrollmentRequestDoc
    }
  },

  Mutation: {
    async postEnrollmentRequest(_: any, prop: GQLPostEnrollmentRequest): Promise<IEnrollmentRequestDoc> {
      return await Create(prop.EnrollmentRequestInput) as unknown as IEnrollmentRequestDoc
    },
    async editEnrollmentRequest(_: any, prop: GQLEditEnrollmentRequest): Promise<IEnrollmentRequestDoc> {
      return await Edit(prop.EnrollmentRequestEdit) as unknown as IEnrollmentRequestDoc
    },
    async removeEnrollmentRequest(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IEnrollmentRequestDoc
    },
    async removeEnrollmentRequests(_: any, prop: any) {
      return await RemoveAll()
    }
  }
}

export default EnrollmentRequestResolver