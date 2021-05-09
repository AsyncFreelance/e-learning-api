import { model } from "mongoose"
import UserSchema from "./user.schema"

export const UserModel = model("new_users", UserSchema)