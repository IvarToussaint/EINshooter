/// <reference path="enemy.ts"/>

class small_plane extends Enemy {
    public enemy: HTMLElement;
    public width: number = 100;
    public height: number = 80;
    public x:number = 100;
    public y:number = 100;
    protected speed:number;
    protected hp:number = 1;
    public game:Game;

    

    constructor(x:number, y:number, g:Game) {
        super(x, y, g);
        this.game = g;
        this.x = x;
        this.y = y; 
        this.speed = Math.floor((Math.random() * 1.3) + 1)  
        this.enemy = document.createElement("enemy2");
        document.body.appendChild(this.enemy);
        super.move();
    
    }

    public remove():void{     
        super.remove();
    }
}