const mockService = require('../services/mockService')

async function dbRead(req,res){
    try{
        const result = await mockService.dbRead()
        if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)
        
    }catch(error){
        console.error(error)
        res.status(500).json({message: "keff response len"})
    }
}


async function dbRead1(req, res){
    try{
        const result = await mockService.dbRead1()
        if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)

    }catch(e){
        console.error(e)
        res.status(500).json({message:"dålig response"})
    }
}

async function dbRead2(req,res){
    try{
        const result = await mockService.dbRead2()
        if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)

    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}

async function dbWrite(req, res){
    try{
        const result= await mockService.dbWrite()
        if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)
    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}

async function dbWrite1(req,res){
    try{ 
        console.log("skickar write1 från controller")
        const result = await mockService.dbWrite1()
        if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)

    }catch(e){
        console.error(e)
        res.status(500).json({message: "dålig response"})
    }
}


async function dbWrite2(req, res){
    try{
        console.log("skickar write2 från controller")
        const result = await mockService.dbWrite2()
            if(!result || !result.data){
            return res.status(500).json({
                message: "database returned no data",
                received: result
            })
        }

        res.json(result.data)

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