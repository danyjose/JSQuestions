function checkString() {
    var str = 'Hello World';
    if(str.indexOf('Hello') !== -1) {
        console.log('string present');
    }
    var str = 'hello world!';
    var result = /hello/.test(str);
    console.log(result); // true
    }
checkString();