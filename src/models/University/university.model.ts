import { model } from "mongoose"
import UniversitySchema from "./university.schema"

export const UniversityModel = model("universities", UniversitySchema)