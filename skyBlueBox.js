class SkyBlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill("skyblue");
        super.display();
    }
}