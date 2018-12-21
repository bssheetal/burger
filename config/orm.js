var connection = require("./connection.js");

var orm = {
    all: function (tablename, cb) {

        connection.query("select * from "+tablename, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        });
    },

    // create:function(tablename,cols,cb)
    // {
    //     connection.query("INSERT INTO"+ cols.toString()+"VALUES (??"
    //     {

    //     }
    // }

}

module.exports = orm;