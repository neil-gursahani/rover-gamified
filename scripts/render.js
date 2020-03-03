// function renderRover(){
//     let aRover = game.rover; // global game instance coming from ./game.js
//     let $game = document.querySelector("#game");
//     let $roverImg = document.createElement("img");

//         switch(aRover.direction){
//             case "N":
//                 $roverImg.setAttribute("src", "./images/wallU.png");
//                 break;
//             case "W":
//                 $roverImg.setAttribute("src", "./images/wallL.png");
//                 break;
//             case "S":
//                 $roverImg.setAttribute("src", "./images/wallD.png");
//                 break;
//             case "E":
//                 $roverImg.setAttribute("src", "./images/wallR.png");
//                 break;
//             default:
//                 console.log("Direction unkown");
//         }
//         $roverImg.setAttribute("id", "wall-e");

//         $roverImg.style.left = `${aRover.position[0] * 10}%`;
//         $roverImg.style.top = `${aRover.position[1] * 10}%`;

//         $game.appendChild($roverImg);
// }

// function renderObstacles(){
//     let obstacles = game.obstacles;
//     let $game = document.querySelector("#game");

//     for(let i = 0; i < obstacles.length; i++) {
//         let $obstacleImg = document.createElement("img");
//         $obstacleImg.style.left = `${obstacles[i].position[0] * 10}%`;
//         $obstacleImg.style.top = `${obstacles[i].position[1] * 10}%`;
//         $obstacleImg.setAttribute("class", "flash");
//         $obstacleImg.setAttribute("src", "./images/flash.png");
//         $game.appendChild($obstacleImg);
//     }

// }

// function renderTrash(){
//     let trash = game.trash;
//     let $game = document.querySelector("#game");

//     for(let i = 0; i < trash.length; i++) {
//         let $trashImg = document.createElement("img");
//         $trashImg.style.left = `${trash[i].position[0] * 10}%`;
//         $trashImg.style.top = `${trash[i].position[1] * 10}%`;
//         $trashImg.setAttribute("class", "trash");
//         $trashImg.setAttribute("src", "./images/trash.png");
//         $game.appendChild($trashImg);
//     }
// }
function renderEverything(){
    let rover = game.rover;
    let trash = game.trash;
    let obstacles = game.obstacles;

    if(game.collide(rover, trash)){
        // alert("Well done!")
        renderShake();
    }

    if(game.collide(rover, obstacles)){
        document.querySelector("#wall-e").setAttribute("src", "./images/pow!.png")
        clearInterval(game.renderRef);
    }
}

function renderShake(){
    document.body.classList.add("shake")
    setTimeout(()=> {
        document.body.classList.remove("shake")
    },1500)
}


// difference between static and dynamic nodes

