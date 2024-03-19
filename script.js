function changeText(headingId) {
    var textsArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var number = getRandomNumberBetween(0, textsArray.length);
    console.log("Index: ", number); 
    document.getElementById(headingId).innerHTML = textsArray[number];
}
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}