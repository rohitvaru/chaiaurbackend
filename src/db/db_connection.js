import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

// Connect to MongoDB

export const connectDB = async () => {
    try {
        // console.log("start....");
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
        console.log("Connected to MongoDB !! DB Host: ", connectionInstance.connection.host);
        console.log("it works!!");
    } catch (error) {
        console.log("Rohit is error: ", error);
        process.exit(1);
    }
}
