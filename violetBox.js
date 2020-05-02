class VioletBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill("violet");
        super.display();
    }
}