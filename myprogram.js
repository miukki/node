//#!/usr/bin/env node
var fs = require('fs');
var path =   require('path');

var args = require('./argparser.js')(process.argv);
var Deferred = require('simply-deferred').Deferred;
var deffer = new Deferred();

//first step : update
if (args.indexOf('update') > -1) {

  require('./currencies.js').http('http://www.getexchangerates.com/api/latest.json', function() {
    deffer.resolve();
  });

} else {

  deffer.resolve();

};


deffer.done(function() {


  var arg  = args.filter(function(item){ return /^get/.test(item); });
  if (arg[0]) {

    var params = arg[0].split(':')[1];
    var rebase;

    require('./currencies.js').getAll(function(data){

      if (!params) {
        console.log(data);
        return;
      };

      if (params.split('/')[0].toUpperCase() != 'USD') {
        rebase = require('./currencies.js').rebase(params.split('/')[0]);
        data = rebase || data;
      };

      if (!params.split('/')[1]) {
        console.log(data);
      } else {
        var getOne = require('./currencies.js').getOne(data, params.split('/')[1]);
        console.log(getOne);
      };


    });


  };


})



//second step : get cur




//https://www.npmjs.org/package/simply-deferred  invoke
