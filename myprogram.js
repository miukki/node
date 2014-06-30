//#!/usr/bin/env node
var fs = require('fs');
var path =   require('path');

console.log('process.argv[2]', process.argv[2]);
var i = 0;
var total = 0;
for (i in process.argv) {
    if (i > 1) {
        total += Number(process.argv[i]);
    };
};
console.log(total);
console.log('lines: ', fs.readFileSync('./myprogram.js').toString().split(';').length);

require('./filter.js').get(process.argv[2], function(arr) {
  console.log(arr);
});

require('./currencies.js').http('http://www.getexchangerates.com/api/latest.json', function(data){
  console.log(JSON.parse(data))
});
