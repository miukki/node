var http = require('http');
var fs = require('fs');

module.exports = {
  'http': function(url, cb) {
    http.get(url, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(data){
        if (cb) {
          cb(data);
        };
      });
      res.on('error', function(e){
        console.log('problem with request: ' + e.message);
      });
    });
  },
  'getAll': function(cb){
    fs.readFile('cur.json', function(err, data) {
      if (err) throw err;
      if (cb)  {
        cb(JSON.parse(data));
      };
    });
  }
}
