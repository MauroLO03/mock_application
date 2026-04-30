const pool = require('../config/db')

async function readDB(){
    const result = await pool.query("select * from availability limit 1")
    return result.rows[0]
}

async function readDB1(){
    const result = await pool.query("select name, surname, email from person limit 4")
    return result.row}


async function readDB2(){
    const result = await pool.query("select * from competence_profile")
    return result.row
}

async function writeDB(  name, surname, pnr, email, password, role_id, username){

    const result = await pool.query("insert into person  (name, surname, pnr, email, password, role_id, username) values ($1,$2,$3,$4,$5,$6,$7) returning *", [ name, surname, pnr, email, password, role_id, username])
    
    return result.rows[0]

}

async function writeDB1(mockID, mockFromDate, mockToDate){

    const result= await pool.query("insert into availability (person_id, from_date, to_date) values($1,$2,$3)", [mockID, mockFromDate, mockToDate])
    return{
        message: "Data succesfully written to DB",
        inserted: {
            id: mockID,
            from: mockFromDate,
            to: mockToDate}
    }
}


async function writeDB2(mockID, mockCompetence, mockExperience){
    const result = await pool.query("insert into competence_profile (person_id, competence_id, years_of_experience) values($1,$2,$3)", [mockID, mockCompetence, mockExperience])
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