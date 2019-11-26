
function sum () {
        return function (a, b){
            return a+b;
        }
  }  
  var calculate = sum();
  console.log(calculate (2,3))