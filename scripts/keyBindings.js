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
            console.log("forward");
            break;
        default:
            console.log("unknown controls")   
    }
})