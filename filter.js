var fs = require('fs');
var path =   require('path');

module.exports = {
  'get': function(arg, cb) {
    fs.readdir('/Users/miukki/Downloads/', function(err, list){
      if (err) {
        return;
      };

      list = list.filter(function(file, index){
        //console.log(fs.statSync('/Users/miukki/Downloads/'+file).isDirectory(), index);
        return !fs.statSync('/Users/miukki/Downloads/'+file).isDirectory() && (path.extname(file) == arg);
      });

      if (cb) {
        cb(list);
      };

    });
  }
}
