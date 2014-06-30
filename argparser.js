module.exports = function(args){
  args = args.splice(2);
  args = args.filter(function(item, index){
    return /^get/.test(item) || /^update/.test(item);
  });
  return args;
};
