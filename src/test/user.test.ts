import dotenv from "dotenv";
dotenv.config();

import User from "../models/User";
import { connectDB } from "../utils/db";
import mongoose from "mongoose";

async function testUserModel() {
    try {
        console.log("test user creation");
        console.log("Connecting to MongoDB...");
        await connectDB();
        const user = await User.create({
            name: "Test User",
            email: "test@example.com",
            password: "password",
            role: "user",
        });
        console.log("User created:");
        console.log(user);

        const found = await User.findOne({ email: "test@example.com" });
        console.log("User found:");
        console.log(found);

        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

testUserModel();