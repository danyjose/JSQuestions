function testPromise () { 
    var test = new Promise(
        function () {
            return 'Dany';
        }
    ).then(function(result){
        console.log(result)
    });
}