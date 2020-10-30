var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
    var errMsg = getById("errMsg");
    errMsg.innerText = "\n";
};
function addVideoGame() {
    console.log("Add video game button called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    if (digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "not ";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "";
    }
    gameInfo.innerText = myGame.title + " has a rating of \n    " + myGame.rating + ". It costs $" + myGame.price.toFixed(2) + ". It is \n    " + notDigitalDisplay + " digital only.";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    var errMsg = getById("errMsg");
    var checkTitle = getById("title");
    var checkPrice = getById("price");
    var priceValue;
    priceValue = parseFloat(checkPrice.value);
    if (checkTitle.value == '') {
        if (priceValue == null || isNaN(priceValue)) {
            errMsg.innerText = "Please enter a title and valid price" +
                "(numbers only)";
        }
        else {
            errMsg.innerText = "Please enter a Title";
        }
        return false;
    }
    if (priceValue == null || isNaN(priceValue)) {
        errMsg.innerText = "Please enter a valid price (numbers only)";
        return false;
    }
    errMsg.innerText = "\n";
    return true;
}
