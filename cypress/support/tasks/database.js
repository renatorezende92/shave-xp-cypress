const { Pool } = require('pg')
const dbConfig = {
    host: 'motty.db.elephantsql.com',
    user: 'rqmknlwd',
    password: 'V5ieDXca1zYFWK4Mofj41RIhOF_rDg47',
    database: 'rqmknlwd',
    port: 5432
}

module.exports = {
    removeUser(email) {
        return new Promise(function (resolve) {
            const pool = new Pool(dbConfig)

            pool.query('DELETE from users where email = $1', [email], function (error, result) {
                if (error) {
                    throw error
                }
                resolve({ success: result })
            })
        })
    }
}