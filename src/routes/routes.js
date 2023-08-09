
import express from 'express'
import transactionData from '../controller/TransactionalData.controller.js'
const router = express.Router()




router.post('/data', transactionData)

export default router