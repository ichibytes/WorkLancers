const pool = require('../utils/sql-db')


const entries = {

    getUser_email: async (email) => {
        let client, result;
        try {
            client = await pool.connect();
            const sql_query = (`
                SELECT email, password FROM users WHERE email=$1
            `)
            result = await pool.query(sql_query, [email])
        } catch (err) {
            console.log('Error al coger el email ---> ' + error);
        }
        return result;
    },
    getUser_password: async (password) => {
        let client, result
        try {
            client = await pool.connect();
            const sql_query = (`
                SELECT password FROM users WHERE password=$1
            `)
            result = await pool.query(sql_query, [password])
        } catch (error) {
            console.log('Error al coger el password ---> ' + error);
        } finally {
            client.release();
        }
        return result;
    },
    getUser_id: async (id) => {
        let result
        try {
            const sql_query = (`
                SELECT user_id FROM users WHERE user_id=$1
            `)
            result = await pool.query(sql_query, [user_id])
        } catch (error) {
            console.log('Error al coger el id ---> ' + error);
        } finally {
            client.release();
        }
        return result;
    },
    setNew_user: async (username, email, password, age, occupation, location, skills) => {
        let client, result
        try {
            client = await pool.connect();
            const sql_query =
                "INSERT INTO users (username, email, password, age, occupation, location, skills) VALUES ($1, $2, $3, $4 ,$5, $6, $7)"
            result = await pool.query(sql_query, [username, email, password, age, occupation, location, skills])
        } catch (error) {
            console.log('Error al registrarse ----> ' + error);
        } finally {
            client.release();
        }
        return result;
    }


}


module.exports = entries;