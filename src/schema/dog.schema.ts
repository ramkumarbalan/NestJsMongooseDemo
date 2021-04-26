import { Schema } from "mongoose";

export const dogSchema = new Schema({
    breed_name: String,
    breed_image: String,
    breed_url: String,
    description: String
}, {
    timestamps: true
})