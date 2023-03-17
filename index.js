
const callBack = function () {
    return `Callback`;
  };
  
function receivesAFunction(callBack) {
    return (callBack());
  };
  
const returnsANamedFunction=function() {
    function fn() {
      console.log(`Named function`);
    }
    return fn;
  }
  
function returnsAnAnonymousFunction() {
    const anonymous=function(){
        return ('')
    }
    return (anonymous)
}
