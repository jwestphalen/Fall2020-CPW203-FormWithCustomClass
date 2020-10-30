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

function getVideoGame():VideoGame{
    //TODO: Create game
    //TODO: Populate with data from the form
    //TODO: Return game
}

function isAllDataValid(){
    return true;
    //TODO: Validation Code
}