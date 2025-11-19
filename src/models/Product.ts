import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product.interface";

const productSchema = new Schema<IProduct> ({
    name: {
        type: String,
        required: [true, "product's name is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [ true, "product's description is required" ],
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: [true, "product category is required"],
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    images: {
        type: [String],
        default: [],
        validate: {
            validator: (array: string[]) =>
                array.every((url) => typeof url === "string"),
            message: "Images must be an array of strings (URLs)."
        },
    },
}, {timestamps: true});

export default model<IProduct>("Product", productSchema);