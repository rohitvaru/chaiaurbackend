import dotenv from "dotenv";
import { connectDB } from "./db/db_connection.js";


dotenv.config({
    path: "./env"
});

connectDB();



/*
import express from "express";
const app = express();

// Connect to MongoDB
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
        app.on("ERROR", (error) => {
            console.log(`Error: ${error}`);
        });
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port ", process.env.PORT);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
})()*/