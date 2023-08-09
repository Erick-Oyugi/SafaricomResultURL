import app from './app.js'
import dotenv from 'dotenv'
import connectDB from './src/config/db_conn.js'


dotenv.config()

connectDB()
const port = process.env.APP_PORT
app.listen(port ,() => {

console.log(`CallBack URL for Mpesa Payment service running on  port ${port}`)

setTimeout(() => {
    console.log (`---------------Waiting to recieve transactional data----------------`)
  }, "4000");


});