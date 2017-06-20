class Enemy {
    public enemy: HTMLElement;
    public width: number = 100;
    public height: number = 80;
    public x:number = 100;
    public y:number = 100;
    protected speed:number;
    protected hp:number;
    public game:Game;

    

    constructor(x:number, y:number, g:Game) {
        this.game = g;
        this.x = x;
        this.y = y;     
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

    public hpState(a:number):void {
        if(a < 0){
            this.remove;
        }
    }
} 
