class Trash {
    constructor(position) {
        this.position = position;
    }

    render(){
        let $game = document.querySelector("#game");

        let $trashImg = document.createElement("img");
        $trashImg.style.left = `${this.position[0] * 10}%`;
        $trashImg.style.top = `${this.position[1] * 10}%`;
        $trashImg.setAttribute("class", "trash");
        $trashImg.setAttribute("src", "./images/trash.png");
        $game.appendChild($trashImg);
    }
}