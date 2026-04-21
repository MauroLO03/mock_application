const mockService = require('../services/mockService')

async function dbRead(req,res){
    try{
        console.log("skickar från controller")
        const result = await mockService.dbRead()
        res.json(result)
        
    }catch(error){
        console.error(error)
        res.status(500).json({message: "keff response len"})
    }
}


async function dbRead1(req, res){
    try{
        console.log("skickar read1 från controller")
        const result = await mockService.dbRead1()
        res.json(result)

    }catch(e){
        console.error(e)
        res.status(500).json({message:"dålig response"})
    }
}

async function dbRead2(req,res){
    try{
        console.log("skickar read2 från controller")
        const result = await mockService.dbRead2()
        res.json(result)

    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}

async function dbWrite(req, res){
    try{
        console.log("skickar write från controller")
        const result= await mockService.dbWrite()
        res.json(result)
    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}

async function dbWrite1(req,res){
    try{ 
        console.log("skickar write1 från controller")
        const result = await mockService.dbWrite1()
        res.json(result)

    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}


async function dbWrite2(req, res){
    try{
        console.log("skickar write2 från controller")
        const result = await mockService.dbWrite2()
        res.json(result)

    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}


module.exports = {
    dbRead,
    dbRead1,
    dbRead2,
    dbWrite,
    dbWrite1,
    dbWrite2
}