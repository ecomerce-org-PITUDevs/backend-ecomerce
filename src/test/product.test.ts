import dotenv from 'dotenv';
dotenv.config();

import Product from '../models/Product';
import { connectDB } from '../utils/db';
import mongoose from 'mongoose';

async function testProductModel() {
    try {
        console.log("test product creation");
        console.log("Connecting to mongoDB...");
        await connectDB();
        const product = await Product.create({
            name: "test product",
            description: "test description",
            price: 20,
            category: "test category",
            stock: 2,
            images: ["test.jpg"]
        });
        console.log("Product created");
        console.log(product);

        const found = await Product.findOne({ name: "test product" });
        console.log("product found");
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

testProductModel();