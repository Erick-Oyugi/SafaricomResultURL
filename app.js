import express from "express";
import bodyParser from "body-parser";
import routes from './src/routes/routes.js'
import helmet from 'helmet'

const app = express();
app.use(helmet())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/' ,routes)





export default app
