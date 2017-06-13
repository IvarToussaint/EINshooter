/// <reference path="enemy.ts"/>
/// <reference path="bullet.ts"/>

class Game {

    public hud:HTMLElement;
    private enemies:Array<Enemy>;
    public bullets:Array<Bullet> = new Array<Bullet>();
    private spaceship : Spaceship;
    public enemy : Enemy;
    public bullet : Bullet;
    public counter : number = 0;
    public lives:number = 3;

    constructor() {
        this.spaceship = new Spaceship(50, 80,this);
        this.enemies = new Array<Enemy>();
        this.hud = document.createElement("score");
        document.body.appendChild(this.hud);

        for(let i = 0; i < 200; i++){
            this.enemies.push(new Enemy(Math.floor((Math.random() * 1800) + 1),Math.floor((Math.random() * -10000) + -1),this));
        }
        requestAnimationFrame(() => this.gameLoop());  
    }
    
    private gameLoop(){
        for(let c of this.bullets){
            for(let e of this.enemies){
                 if (c.x                    < e.x + e.width &&
                     c.x + c.width          > e.x &&
                     c.y                    < e.y + e.height &&
                     c.height + c.y         > e.y) {  
                        this.counter++;
                        console.log(this.counter);
                        this.bullets.splice(this.bullets.indexOf(c), 1); 
                        this.enemies.splice(this.enemies.indexOf(e), 1); 

                        e.remove();
                        
                        c.remove();
                }
            }
        }
    for(let b of this.bullets){
            b.move();
        }
    
    for(let e of this.enemies){
            e.move();
    }

    this.spaceship.move();
    
    this.hud.innerHTML = "score: " + this.counter;
         
        requestAnimationFrame(() => this.gameLoop());
    }

    public addBullet(b:Bullet, c:Bullet) {
        this.bullets.push(b,c);
    }

    public liveCounter() {
        for(let e of this.enemies){
            this.lives--;      
            console.log(this.lives); 
            this.enemies.splice(this.enemies.indexOf(e), 1);
            if(this.lives < 0){
                let g = document.createElement("gameover");
                document.body.appendChild(g);
                this.hud.innerHTML= "";
                g.innerHTML = "GAME OVER, YOUR SCORE: " + this.counter;
                window.setTimeout(function(){
                    location.reload();
                }, 2000);
            }
        }
        
    }
} 

