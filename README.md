grab currencies
============

### Environment
- Install  node.js
http://nodejs.org/download/

### Start app
$ git clone git@github.com:miukki/node.git
$ cd node
$ node myprogram.js update
$ node myprogram.js get:usd/rub
$ node myprogram.js get

### Steps for learn

// we will  information from disk, network
//first day
1. require('./argparser.js')
2. require('./currencies.js').http()  //update currencies (base currency : USD)
3. require('./currencies.js').getAll()  //async
4. require('./currencies.js').getOne()

//next day

