const pool = require('../config/db')

async function readDB(){
    console.log("skickar från repository")
    const result = await pool.query("select * from table")
    return {
        data: "data from dDB"}
}

async function readDB1(){
    console.log("read1 från repository")
    const result = await pool.query("select * from table")
    return {
        data: "data from DB"
    }
}

async function readDB2(){
    console.log("read2 från repository")
    const result = await pool.query("select * from table")
    return {
        data: "data from DB"
    }
}

async function writeDB(username, password){
    console.log("write från repository")

    const result = await pool.query("insert into users  (username, password), values ($1,$2)", [username, password])
    return{
        message: "Data succesfully written to DB",
        insertedUser: username
    }

}

async function writeDB1(mockID, mockFromDate, mockToDate){
    console.log("write1 från repository")

    const result= await pool.query("insert into availability (mockID, mockFromDate, mockToDate) values($1,$2)", [mockID, mockFromDate, mockToDate])
    return{
        message: "Data succesfully written to DB",
        inserted: {
            id: mockID,
            from: mockFromDate,
            to: mockToDate}
    }
}


async function writeDB2(mockID, mockCompetence, mockExperience){
    console.log("write2 från repository")
    const result = await pool.query("insert into competence_profile (mockID, mockCompetence, mockExperience values($1,$2,$3)", [mockID, mockCompetence, mockExperience])
    return{
        message:"data succesfully written to DB",
        inserted:{
            id: mockID,
            competence: mockCompetence,
            years_of_experience: mockExperience
        }
    }
}

module.exports ={
    readDB,
    readDB1,
    readDB2,
    writeDB,
    writeDB1,
    writeDB2
}