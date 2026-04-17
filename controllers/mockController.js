const mockService = require('../services/mockService')

async function read(req,res){
    try{
        console.log("skickar från controller")
        const result = await mockService.read()
        res.json(result)
        
    }catch(error){
        console.error(error)
        res.status(500).json({message: "keff response len"})
    }
}

    module.exports = {
        read
    }