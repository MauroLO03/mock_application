const mockRepository = require('../repositories/mockRepository')

async function dbRead(){
    console.log("skickar read från service")
    const dbResult =await mockRepository.readDB()
    return {
        message: "read success",
        data: dbResult
    }
}

async function dbRead1(){
    console.log("skickar read1 från service")
    const dbResult = await mockRepository.readDB1()
    return{
        message: "read1 success",
        data: dbResult
    }
}

async function dbRead2(){
    console.log("skickar read2 från service")
    const dbResult = await mockRepository.readDB2()
    return{
        message:"read2 success",
        data: dbResult
    }
}

async function dbWrite(){
    console.log("skickar write från service")
    const randomString = mockData()
    const dbResult = await mockRepository.writeDB(randomString)
    return{
        message:"write success",
        data: dbResult
    }
}

async function dbWrite1(){
    console.log("skickar write1 från service")
    
    const dbResult = await mockRepository.writeDB1()
    return{
        message:"write1 success",
        data: dbResult
    }
}

async function dbWrite2(){
    console.log("skickar write2 från service")

    const dbResult = await mockRepository.writeDB2()

    return{
        message:"write2 success",
        data: dbResult
    }
}

function mockStringData(){
    const randomStr = Math.random().toString(36).substring(2,8) //väljer variabler från index värde 2 till 8
    return randomStr
}

module.exports = {
    dbWrite,
    dbWrite1,
    dbWrite2,
    dbRead,
    dbRead1,
    dbRead2

}