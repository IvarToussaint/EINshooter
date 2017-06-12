/// <reference path="game.ts"/>

class Bullet {
    
    private div: HTMLElement;
    private game:Game;
    public x:number = 20;
    public y:number = 20;
    public width:number = 7;
    public height:number = 22;
    private xspeed:number;
    private yspeed:number;

    constructor(x:number, y:number) {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
                
        this.x = x;
        this.y = y;
        
        this.xspeed = 0;
        this.yspeed = -10;

        

        this.move();
    }

    public move():void {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public remove() {
        this.div.remove();
    }

}