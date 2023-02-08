import mongoose from "mongoose";

export const connectToDatabase = async () => {
    // if (mongoose.connections[0]) {
    //     return;
    // }
    await mongoose
    .connect(
        "mongodb+srv://AdminDB:zgBCSyW7mQ4kgIIO@cluster0.sqnfnab.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connection to Database Successfull"))
    .catch((err) => console.log(err));
}
