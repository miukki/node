var fs = require('fs');
var path =  require('path');

module.exports = function($scope) {

  var args = require('./argparser.js')($scope.arg);//process.argv
  var Deferred = require('simply-deferred').Deferred;
  var deffer = new Deferred();

  //first step : update
  if (args.indexOf('update') > -1) {

    require('./currencies.js').http('http://www.getexchangerates.com/api/latest.json', function() {
      $scope.log.push('update done!');
      $scope.$apply();
      deffer.resolve();
    });

  };


  deffer.done(function() {

    // second step: get currencies (all || one)
    var arg  = args.filter(function(item){ return /^get/.test(item); });

    if (!arg[0]) {
      return;
    };

    var params = arg[0].split(':')[1];
    var rebase;

    require('./currencies.js').getAll(function(data){

      if (!params) {
        $scope.log.push(data);
        $scope.$apply();
        return;
      };

      if (params.split('/')[0].toUpperCase() != 'USD') {
        rebase = require('./currencies.js').rebase(params.split('/')[0]);
        data = rebase || data;
      };

      if (!params.split('/')[1] || !data[params.split('/')[1]]) {
        $scope.log.push(data);
      } else {
        var getOne = require('./currencies.js').getOne(data, params.split('/')[1]);
        $scope.log.push(getOne);
      };

      $scope.$apply();


    });



  })


};







//https://www.npmjs.org/package/simply-deferred  invoke
