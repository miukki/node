var http = require('http');
var fs = require('fs');

module.exports = {
  'http': function(url, cb) {
    http.get(url, function(res) {
      res.setEncoding('utf8');
      var data = ''; //not null, not object, but string

      res.on('data', function(chunk){
        data += chunk;
        console.log('data.length', data.length);

        if (res.headers['content-length'] == data.length) {

          fs.writeFileSync('cur.json', JSON.stringify(JSON.parse(data)[0]));
          console.log('done, UPDATE!')

          if (cb) {
            cb();
          };

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

  'rebase': function(base) {
    base = base.toUpperCase();

    var data = JSON.parse(this.getAllSync());
    var rebase = {};

    if (!data[base]) {
      console.log(base + ' undefined! ');
      return;
    };

  	for(var i in data) {
      rebase[i] = data[i] / data[base];
  	};

    return rebase;
  },

  'getOne': function(data, cur) {
    cur  = cur.toUpperCase();
    var obj = {};
    obj[cur] = data[cur];
    return obj;
  }

}
