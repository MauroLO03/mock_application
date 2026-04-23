const{ Pool } = require('pg')

function createPool(config){
    const pool = new Pool(config)
    pool.on('connect', () =>{
        console.log('connected to postgres')
    })

    pool.on('error', (err) => {
        console.error('Unexpected error on idle client', err)
        process.exit(-1)
    })
    return pool
}


const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
};

const poolInstance = createPool(dbConfig)

module.exports= poolInstance