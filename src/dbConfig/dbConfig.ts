import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB Connected")
        })

        connection.on("error", (err) => {
            console.log("MongoDB Connection Error, Please make sure db is up and running. "+err) 
            process.exit()
        })



    } catch (error:any) {
        console.log("Something went wrong in connection to Db")
        console.log(error.message)
    }
}