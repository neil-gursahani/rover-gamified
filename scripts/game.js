class Game {
    constructor(){
        this.rover = new Rover([3,4]);
        this.obstacles = [new Flash([8,8])];
        this.trash = [new Trash([2,8])];
    }

    start(){
    
        this.renderRef = setInterval(()=> {
            renderEverything()
        }, 250)

        setInterval(()=> {
            let randomX = Math.floor(Math.random() * 10);
            let randomY = Math.floor(Math.random() * 10);

           this.obstacles.push(new Flash([randomX, randomY]));

        }, 2000)

        setInterval(()=> {
            let randomX = Math.floor(Math.random() * 10);
            let randomY = Math.floor(Math.random() * 10);

           this.trash.push(new Trash([randomX, randomY]));

        }, 2000)

        setInterval(()=> {
            if( this.obstacles.length > 0){
                let randomObstacle = Math.floor(Math.random() * this.obstacles.length);
                this.obstacles.splice(randomObstacle, 1);
            }
        }, 3000)
    }

    collide(rover, gameObjects){
        for(let i = 0; i < gameObjects.length; i++){
            if(rover.position[0] === gameObjects[i].position[0] &&
                rover.position[1] === gameObjects[i].position[1]) {
                    gameObjects.splice(i,1);
                    return true;
                }
        }
    }
}
let game = new Game();
game.start();