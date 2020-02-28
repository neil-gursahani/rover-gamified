class Flash {
    constructor(position){
        this.position = position;
        if(Math.random() * 10 >= 6) {
            document.querySelector("#thunder-sound").play();
        }
    }
}