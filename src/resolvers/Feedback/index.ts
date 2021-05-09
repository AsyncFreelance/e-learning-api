import { FeedbackModel } from "../../models/Feedback/feedback.model"
import { GQLEditFeedback, GQLPostFeedback, IFeedbackDoc } from "../../models/Feedback/feedback.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(FeedbackModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const FeedbackResolver = {
  Query: {
    async fetchFeedbacks(_: any, prop: any): Promise<IFeedbackDoc[]> {
      return await Fetch() as unknown as IFeedbackDoc[]
    },
    async fetchFeedbackByID(_: any, prop: any): Promise<IFeedbackDoc> {
      return await FetchOne(prop._id) as unknown as IFeedbackDoc
    }
  },

  Mutation: {
    async postFeedback(_: any, prop: GQLPostFeedback): Promise<IFeedbackDoc> {
      return await Create(prop.FeedbackInput) as unknown as IFeedbackDoc
    },
    async editFeedback(_: any, prop: GQLEditFeedback): Promise<IFeedbackDoc> {
      return await Edit(prop.FeedbackEdit) as unknown as IFeedbackDoc
    },
    async removeFeedback(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IFeedbackDoc
    },
  }
}

export default FeedbackResolver