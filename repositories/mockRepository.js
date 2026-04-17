const pool = require('../config/db')

async function readDB(){
    console.log("skickar från repository")
    const result = await pool.query("select * from table")
    return {
        data: "data from dDB"}
}


module.exports ={
    readDB
}