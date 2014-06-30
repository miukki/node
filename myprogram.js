//#!/usr/bin/env node
var fs = require('fs');
var path =   require('path');

var arr = require('./argparser.js')(process.argv);

console.log('arr', arr);

require('./currencies.js').http('http://www.getexchangerates.com/api/latest.json', function(data){
  fs.writeFile('cur.json', data, {}, function() {
    console.log('done upload!')
  });
});

/*

require('./currencies.js').getAll(function(data){
  console.log(data)
});

*/


