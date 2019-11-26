function lastThreeCharacters () {
    var str = "itisallpurple";
    console.log(str.substr(str.length-3));
    console.log(str.slice(str.length-3));

}
lastThreeCharacters();