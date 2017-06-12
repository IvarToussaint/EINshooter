class Enemy {
    private enemy: HTMLElement;
    public width: number = 100;
    public height: number = 80;
    public x:number = 100;
    public y:number = 100;
    private speed:number;
    private lives:number = 3;
    private game:Game;

    

    constructor(x:number, y:number, g:Game) {
        this.game = g;
        this.x = x;
        this.y = y; 
        this.speed = Math.floor((Math.random() * 1.8) + 1)  
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
        this.move();
    
    }

    public move():void {
        this.y += this.speed;
        this.enemy.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        if(this.y > 900){
            this.game.liveCounter();
        }
    }

    public remove():void{     
        this.enemy.remove();
    }
} 
