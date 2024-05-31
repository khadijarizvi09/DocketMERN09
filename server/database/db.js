import { error } from "console";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const connection =()=>
    {
        const moongoDB = `mongodb+srv://${USERNAME}:${PASSWORD}@khadijabuilding.bf1bpow.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=KhadijaBuilding`
        
        mongoose.connect(moongoDB, {useNewUrlParser:true ,useUnifiedTopology: true})
        mongoose.connection.on(`connected`, ()=>
        { 
            console.log("DB connected successfully");
        })
        mongoose.connection.on(`disconnected`, ()=>
            {
                console.log("DB disconnected ");
            })
        mongoose.connection.on(`error`, ()=>
            {
                    console.log("error while connecting ", error.message);
            })
    }
    export default connection;