const mockRepsitory = require('../repositories/mockRepository')

async function read(){
    console.log("skickar från service")
    const dbResult =await mockRepsitory.readDB()
    return {
        message: "read success",
        data: dbResult
    }
}

module.exports = {
    read,

}