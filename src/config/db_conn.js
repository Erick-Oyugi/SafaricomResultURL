import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async function () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        setTimeout(() => {
            console.log("Log Tansactional Data To Mongo Database")
          }, "3000");

    
    }
    catch (error){

        console.log(error)
        process.exit(1)
    }
}

export default connectDB