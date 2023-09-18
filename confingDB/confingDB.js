import mongoose from "mongoose";
// import "dotenv/config.js"
const DB_URL="mongodb+srv://rohit:rohit123@cluster0.0vl9rmn.mongodb.net/?retryWrites=true&w=majority";
 async function confingDB(){
try {
    await mongoose.connect(DB_URL);
    console.log("mongodb connected");
} catch (error) {
    console.log("mongodb  not  connected");
    
}
 }
 export default confingDB;