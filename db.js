const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"22021705aA@",
    host:"localhost",
    port:5432,
    database:"perntodo"
})
;

module.exports = pool