import mongoose from 'mongoose'

const resultSchema = new mongoose.Schema({
    Results: {
        type:Object,
       
          Result: {
            type: String,
            required: true
                 },

      ResultCode : {
        type: String,
        required: true

      },
      ResultDesc :{
        type: String,
        required: true

      },
      OriginatorConversationID: {

        type: String,
        required: true
      },
      ConversationID: {
        type: String,
        required: true

      },

      TransactionID :{
        type: String,
        required: true

      },
      ResultParameters:{
             type: Object ,
        ResultParameters: [
            {
                key: String, Value: String
            }
            
        ]
      },

      ReferenceData: {
         type: Object,
         ResultItem : [{
            Key: String , Value: String 
         }]
      }

    }
})

export default mongoose.model('resultSchema', resultSchema)