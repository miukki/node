//#!/usr/bin/env node
var fs = require('fs');
var path =   require('path');

var args = require('./argparser.js')(process.argv);

console.log('args', args);

if (args.indexOf('update') > -1) {

  require('./currencies.js').http('http://www.getexchangerates.com/api/latest.json');

};



var arg  = args.filter(function(item){ return /^get/.test(item); });
if(arg[0]) {
  var params = arg[0].split(':')[1];
  var cur;
  require('./currencies.js').getAll(function(data){

    if (!params) {
      console.log(data);
      return;
    };

    console.log('params', params.split('/')[0], params);

    if (params.split('/')[0] != 'usd') {
      cur = require('./currencies.js').rebase(params.split('/')[0]);
    };

  });


};



//https://www.npmjs.org/package/simply-deferred  invoke
