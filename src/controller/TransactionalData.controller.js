
import resultSchema from '../model/Result.schema.js'


const transactionData = async (req ,res)=> {

    const results = new resultSchema({
        Results: req.body.Results

    })


    try{
        const newResults = await results.save()
        res.status(201).json(newResults)
        console.log(newResults)
    }catch (err){
        res.status(400).json({message:err.message})
    }

}

export default transactionData