var http = require('http');
var fs = require('fs');

module.exports = {
  'http': function(url) {
    http.get(url, function(res) {
      res.setEncoding('utf8');
      var data = ''; //not null, not object, but string

      res.on('data', function(chunk){
        data += chunk;
        console.log('data.length', data.length);

        if (res.headers['content-length'] == data.length) {

          fs.writeFileSync('cur.json', data);
          console.log('done, upload!')

        };

      });


      res.on('end', function() {

        //
      });

      res.on('error', function(e){
        console.log('problem with request: ' + e.message);
      });
    });
  },

  'getAll': function(cb){
    fs.readFile('cur.json', {'encoding': 'utf8'}, function(err, data) {
      if (err) throw err;
      if (cb)  {
        cb(JSON.parse(data));
      };
    });
  },

 'getAllSync': function() {
    return fs.readFileSync('cur.json', {'encoding': 'utf8'});
  },

  'rebase': function(cur) {
    var data = JSON.parse(this.getAllSync())[0];
    var rebase = []
    if (!data[cur]) {
      return;
    } else {

    }
  }

}
