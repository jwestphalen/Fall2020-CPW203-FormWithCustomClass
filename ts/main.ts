class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}
/*
//test code
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/


window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("Add video game button called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function getById(id:string){
    return document.getElementById(id);
}
/**
 * Gets all game data from the form 
 * and returns it in a VideoGame object.
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    //Populate with data from the form
    let titleInput = 
        <HTMLInputElement>getById("title");
        game.title = titleInput.value;

        let priceInput =
            <HTMLInputElement>getById("price");
        game.price = parseFloat(priceInput.value);

        let ratingInput =
            <HTMLSelectElement>getById("rating");
        game.rating = ratingInput.value;

        let digitalOnly = 
            <HTMLInputElement>getById("online");
        //game.isDigitalOnly = digitalOnly.checked;
        if(digitalOnly.checked){
            game.isDigitalOnly = true;
        }
        else{
            game.isDigitalOnly = false;
        }

    //Return game
    return game;

}


function displayGame(myGame:VideoGame):void{
    //Display video game below the form
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "not ";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "";
    }
    /*gameInfo.innerText = myGame.title + " has a rating of " +
                    myGame.rating + ". It costs " + myGame.price
                    + ". It is " + notDigitalDisplay
                    + "digital only";*/
    gameInfo.innerText = `${myGame.title} has a rating of 
    ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. It is 
    ${notDigitalDisplay} digital only.`

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid(){
    return true;
    //Validation Code
}