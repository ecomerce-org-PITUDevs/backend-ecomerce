import mongoose from "mongoose";

export const connectDB = async() => {
    const mongoURI: string | undefined = process.env.MONGO_URI;

    // to prevent undefined value on mongoURI
    if (!mongoURI) {
        console.error("❌ Missing MONGO_URI in environment variables");
        process.exit(1);
    }
    
    try {
        await mongoose.connect(mongoURI, {
            dbName: "E-comerce"
        });

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("✅ MongoDB connected succesfully");
        });

        connection.on("error", (err) => {
            console.log("❌ MongoDB connection error: ", err);
        })

        connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected");
        });
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB", error);
        process.exit(1);
    }
};