
document.addEventListener("keydown", function(event){
    switch(event.code){
        case "ArrowRight":
            game.rover.turnRight();
            break;
        case "ArrowLeft":
            game.rover.turnLeft();  
            break;
        case "Space":
            game.rover.moveForward();
            break;
        default:
            console.log("unknown controls")   
    }
})