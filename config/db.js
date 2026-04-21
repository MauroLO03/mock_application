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
module.exports= createPool