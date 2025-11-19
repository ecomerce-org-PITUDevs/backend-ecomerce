import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface"

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlenght: [2, "Name must be at least 2 character long"],
    }, 
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    }, 
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default model<IUser>("User", userSchema);

