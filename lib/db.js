const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1', 
    user:'root', 
    password: '0123456',
    connectionLimit: 5,
    database:'testdb'
});
pool.getConnection()
    .then(conn => {
        console.log("Connected!");
      conn.query("SELECT now()")
        .then(rows => { // rows: [ {val: 1}, meta: ... ]
            
          return conn.query("INSERT INTO username (id,pass) VALUES ('testuser4','12458z')", [1, "mariadb"]);
        })
        .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.release(); // release to pool
          console.log(res);
        })
        .catch(err => {
          conn.release(); // release to pool
          console.log("release to pool!");
        })
        
    }).catch(err => {
      //not connected
      console.log("Not Connected!"+err.message);
    });