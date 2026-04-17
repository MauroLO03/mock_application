const{ Pool } = require('pg')

const pool = new Pool({
    host: 'localhost', //coordinator (?) ip
    port: 5432,
    user: 'från.env', //från config
    password: 'från.env', //från config
    database: 'frånNånstans'
})

pool.on('connect', () => {
    console.log('connected to postgres')
})

pool.on('error', (err) => {
    console.error('Unexpected errror on idle client', err)
    process.exit(-1)

})

module.exports=pool