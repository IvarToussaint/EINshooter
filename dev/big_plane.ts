/// <reference path="enemy.ts"/>

class big_plane extends Enemy {
    public enemy: HTMLElement;
    public width: number = 100;
    public height: number = 80;
    public x:number = 100;
    public y:number = 100;
    protected speed:number;
    protected hp:number = 2;
    public game:Game;

    

    constructor(x:number, y:number, g:Game) {
        super(x, y, g);
        this.game = g;
        this.x = x;
        this.y = y; 
        this.speed = Math.floor((Math.random() * 2) + 1)  
        this.enemy = document.createElement("enemy3");
        document.body.appendChild(this.enemy);
        super.move();
    
    }

    public remove():void{     
        super.remove();
    }
}