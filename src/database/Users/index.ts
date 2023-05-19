import { model } from "mongoose";
import IUser from "../../types/User";
import userSchema from "./schema";

const User = model<IUser>("User", userSchema);

export default User;