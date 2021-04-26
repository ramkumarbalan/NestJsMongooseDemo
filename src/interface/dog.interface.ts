import { Mongoose } from "mongoose"
import * as mongoose from 'mongoose'
export interface DogInterface extends mongoose.Document{
    breed_name: string,
    breed_image: string,
    breed_url: string,
    description: string
}