function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  return function myFunk() {
    console.log("hi");
  }
}


function returnsAnAnonymousFunction() {
  return function() {
  }
}
