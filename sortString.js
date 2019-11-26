function sortAscending (array) {
    var strArray = ['a','g','b','c','h','l','m','u','h','y'];
    strArray = strArray.sort();
    console.log('Sorted characters: ',strArray);
    var numArray = [1,3,7,55,88,34,6,9,6,8];
    numArray = numArray.sort(function(a, b){return a-b});
    console.log('Sorted Numbers: ',numArray);
}
sortAscending();