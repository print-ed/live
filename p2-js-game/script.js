// Game display
function startGame() {
    let nameLength = document.getElementById("name");
    let start = document.getElementById("gameStart");
    let ingame = document.getElementById("inGame");
    let end = document.getElementById("inGame");
    // get the value user name and convert it to an array
    let lengthContainer = nameLength.value.split('');
    //then use if else to look if the array length is less than, equal, or more than the number given
    if (lengthContainer.length === 0) {
        alert("NAME IS EMPTY")
    }
    else if (lengthContainer.length > 15) {
        alert("Y IS YOUR NAME TOO LONG? MAKE IT SHORTER!")
    }
    else if (lengthContainer.length < 2) {
        alert("TOO SHORT")
    }
    // value above are false then go to next screen
    else {
        start.style.display = "none";
        ingame.style.display = "flex";
    }
}

