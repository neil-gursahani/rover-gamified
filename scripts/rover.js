// Rover Object Goes Here
// ======================
class Rover {
    constructor(startPostionArr){
        this.travelLog = [];
        this.direction = "N";
        this.position = startPostionArr;
    }
    turnLeft(){
        switch(this.direction){
            case "N":
                this.direction = "W";
                break;
            case "W":
                this.direction = "S";
                break;
            case "S":
                this.direction = "E";
                break;
            case "E":
                this.direction = "N";
                break;
            default:
                console.log("Direction unkown");
        }
      console.log("turnLeft was called!");
    }
    turnRight(){
        switch(this.direction){
            case "N":
                this.direction = "E";
                break;
            case "W":
                this.direction = "N";
                break;
            case "S":
                this.direction = "W";
                break;
            case "E":
                this.direction = "S";
                break;
            default:
                console.log("Direction unkown");
        }
        console.log("turnRight was called!");
    }
    moveForward(){
        this.travelLog.push(this.position);

        switch(this.direction){
            case "N":  
                if(this.position[1] === 0) {
                    console.log("Don't make me do this!");
                } else {
                    this.position[1]--;
                }
                break;
            case "W":
                if(this.position[0] === 0) {
                    console.log("Don't make me do this!");
                } else {
                    this.position[0]--;
                }
                break;
            case "S":
                if(this.position[1] === 9) {
                    console.log("Don't make me do this!");
                } else {
                    this.position[1]++;
                }
                break;
            case "E":
                if(this.position[0] === 9) {
                    console.log("Don't make me do this!");
                } else {
                    this.position[0]++;
                }
                break;  
            default:
                console.log("Direction unkown");
        }
      console.log("moveForward was called")
    }
    instructRover(listOfCommands){
        for(let i = 0; i < listOfCommands.length; i++) {
            switch(listOfCommands[i]){
                case "l":
                    this.turnLeft();
                    break;
                case "r":
                    this.turnRight();
                    break;
                case "f":
                    this.moveForward();
                    break;
                default:
                    console.log("Command unkown");
            }
        }
    }
    outOfBounds(){
        if(this.position[1] === 0 && this.direction === "N") {
            console.log("Don't make me do this!");
        } 
        else if(this.position[0] === 0 && this.direction === "W") {
            console.log("Don't make me do this!");
        } 
        else if(this.position[1] === 9 && this.position === "S") {
            console.log("Don't make me do this!");
        }
        else if(this.position[0] === 9 && this.direction === "E") {
            console.log("Don't make me do this!");
        }  else {
            return false
        }
    }

    render(){
        let $game = document.querySelector("#game");
        let $roverImg = document.createElement("img");
    
            switch(this.direction){
                case "N":
                    $roverImg.setAttribute("src", "./images/wallU.png");
                    break;
                case "W":
                    $roverImg.setAttribute("src", "./images/wallL.png");
                    break;
                case "S":
                    $roverImg.setAttribute("src", "./images/wallD.png");
                    break;
                case "E":
                    $roverImg.setAttribute("src", "./images/wallR.png");
                    break;
                default:
                    console.log("Direction unkown");
            }
            $roverImg.setAttribute("id", "wall-e");
    
            $roverImg.style.left = `${this.position[0] * 10}%`;
            $roverImg.style.top = `${this.position[1] * 10}%`;
    
            $game.appendChild($roverImg);
    }
}
