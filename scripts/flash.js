class Flash {
    constructor(position){
        this.position = position;
        if(Math.random() * 10 >= 6) {
            document.querySelector("#thunder-sound").play();
        }
        this.animateFallingDown()
    }

    animateFallingDown(){
        setInterval(()=> {
            this.position[1] += 0.5;
        }, 200)
    }

    render(){
        let $game = document.querySelector("#game");
        let $obstacleImg = document.createElement("img");
        $obstacleImg.style.left = `${this.position[0] * 10}%`;
        $obstacleImg.style.top = `${this.position[1] * 10}%`;
        $obstacleImg.setAttribute("class", "flash");
        $obstacleImg.setAttribute("src", "./images/flash.png");
        $game.appendChild($obstacleImg);
    }
}