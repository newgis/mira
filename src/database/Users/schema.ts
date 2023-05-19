import { Schema } from "mongoose";
import IUser from "../../types/User";

const userSchema = new Schema<IUser>({
    login: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: false },
});

export default userSchema;
