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

    create:function(tablename,cols,vals,cb)
    {
        var querystring="INSERT INTO"+ " "+tablename+"("+cols.toString()+")"+"VALUES (?)";
        console.log(querystring);
        connection.query(querystring,vals,function(err,result)
        { if(err)
            {
                throw err;
            }

            cb(result);

        });
        
    }

}

module.exports = orm;