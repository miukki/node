var http = require('http');

module.exports = {
  'http': function(url, cb) {
    http.get(url, function(res) {
      //res.setEncoding('utf8');
      res.on('data', function(data){
        if (cb) {
          cb(data);
        };
      });
      res.on('error', function(e){
        console.log('problem with request: ' + e.message);
      });
    });
  }
}
