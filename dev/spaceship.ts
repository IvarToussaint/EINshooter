class Spaceship {

    private spaceship : HTMLElement;
    public game:Game;
    public width : number = 80;
    public height : number = 80;
    
    public posX : number;
    public posY : number;

    private upKey : number = 87;        // W key
    public upKeyHitn : boolean = false;
    public upSpeed : number = 0;

    private downKey : number = 83;      // S key
    public downKeyHit : boolean = false;
    public downSpeed : number = 0;

    private leftKey : number = 65;      // A key
    public leftKeyHit : boolean = false;
    public leftSpeed : number = 0;

    private rightKey : number = 68;     // D key
    public rightKeyHit : boolean = false;
    public rightSpeed : number = 0;

    private shiftKey : number = 16; //Shift key
    public shiftKeyHit : boolean = false;
    public shiftSpeed : number = 0;


    constructor(x:number, y:number, g:Game){
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.spaceship = document.createElement("spaceship");
        this.spaceship.style.backgroundPositionX = "0vw";
        document.body.appendChild(this.spaceship);
        this.spaceship.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        console.log("X="+this.posX+" Y="+this.posY);

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }

    public move(){
        //left movement
        if(this.posX < 1){
            this.leftSpeed = 0;
        } else {
            this.posX -= this.leftSpeed;
            this.spaceship.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
        //right movement
        if(this.posX > 95){
            this.rightSpeed = 0;
        } else {
            this.posX += this.rightSpeed;
            this.spaceship.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
    }

     onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upKey:
            this.upSpeed = 1;
            this.spaceship.style.backgroundPositionX = "px";
            break;
        case this.downKey:
            this.downSpeed = 1;
            this.spaceship.style.backgroundPositionX = "-px";
            break;
        case this.leftKey:
            this.leftSpeed = 1;
            this.spaceship.style.backgroundPositionX = "-px";
            break;
        case this.rightKey:
            this.rightSpeed = 1;
            this.spaceship.style.backgroundPositionX = "0px";
            break;
        case this.shiftKey:
            this.fire();    
        }
    }
        
    onKeyUp(event:KeyboardEvent):void {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    }

     public fire():void {
      let rect:ClientRect = this.spaceship.getBoundingClientRect();      
      console.log("plaats een kogel op " + rect.left + " , " + rect.top);

      let b:Bullet = new Bullet(rect.left + 50, rect.top);
      let c:Bullet = new Bullet(rect.left + 90, rect.top);

        this.game.addBullet(b, c);
  }  
}
