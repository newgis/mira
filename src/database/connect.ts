import { connect } from "mongoose";

export default async function connectDatabase(dbUrl: string) {
    try {
        await connect(dbUrl);
    } catch (error) {
        throw new Error("Database connection error: " + error);
    }
}