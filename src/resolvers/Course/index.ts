import { CourseModel } from "../../models/Course/course.model"
import { GQLEditCourse, GQLPostCourse, ICourseDoc } from "../../models/Course/course.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(CourseModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const CourseResolver = {
  Query: {
    async fetchCourses(_: any, prop: any): Promise<ICourseDoc[]> {
      const courses = await Fetch() as unknown as ICourseDoc[]
      return courses.filter(course => course.verified)
    },
    async fetchUnverifiedCourses(_: any, prop: any): Promise<ICourseDoc[]> {
      const courses = await Fetch() as unknown as ICourseDoc[]
      return courses.filter(course => !course.verified)
    },
    async fetchCourseByID(_: any, prop: any): Promise<ICourseDoc> {
      return await FetchOne(prop._id) as unknown as ICourseDoc
    }
  },

  Mutation: {
    async postCourse(_: any, prop: GQLPostCourse): Promise<ICourseDoc> {
      return await Create(prop.CourseInput) as unknown as ICourseDoc
    },
    async editCourse(_: any, prop: GQLEditCourse): Promise<ICourseDoc> {
      return await Edit(prop.CourseEdit) as unknown as ICourseDoc
    },
    async removeCourse(_: any, prop: any): Promise<ICourseDoc> {
      return await Remove(prop._id) as unknown as ICourseDoc
    },
    async verifyCourse(_: any, prop: any): Promise<ICourseDoc> {
      return await Edit({
        _id: prop._id,
        verified: true
      }) as unknown as ICourseDoc
    }
  }
}

export default CourseResolver