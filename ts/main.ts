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

function displayGame(myGame:VideoGame):void{
    //TODO: Display video game below the form
}

/**
 * Gets all game data from the form 
 * and returns it in a VideoGame object.
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    //Populate with data from the form
    let titleInput = 
        <HTMLInputElement>document.getElementById("title");
        game.title = titleInput.value;

        let priceInput =
            <HTMLInputElement>document.getElementById("price");
        game.price = parseFloat(priceInput.value);

        let ratingInput =
            <HTMLInputElement>document.getElementById("rating");
        game.rating = ratingInput.value;

        let digitalOnly = 
            <HTMLInputElement>document.getElementById("online");
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

function isAllDataValid(){
    return true;
    //TODO: Validation Code
}