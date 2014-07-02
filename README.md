grab currencies
============

### Environment
- Install  node.js
http://nodejs.org/download/
- npm install

### Start app
$ git clone git@github.com:miukki/node.git
$ cd node
$ node myprogram.js update
$ node myprogram.js get:usd/rub
$ node myprogram.js get

### Steps for learn

// we will  information from disk, network
//first day
- require('./argparser.js')
- require('./currencies.js').http()  //update currencies (base currency : USD)
- require('./currencies.js').getAll()  //async
- require('./currencies.js').getOne()
- require('simply-deferred')



