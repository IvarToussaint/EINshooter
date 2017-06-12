var Enemy = (function () {
    function Enemy(x, y, g) {
        this.width = 100;
        this.height = 80;
        this.x = 100;
        this.y = 100;
        this.lives = 3;
        this.game = g;
        this.x = x;
        this.y = y;
        this.speed = Math.floor((Math.random() * 1.8) + 1);
        this.enemy = document.createElement("enemy");
        document.body.appendChild(this.enemy);
        this.move();
    }
    Enemy.prototype.move = function () {
        this.y += this.speed;
        this.enemy.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y > 900) {
            this.game.liveCounter();
        }
    };
    Enemy.prototype.remove = function () {
        this.enemy.remove();
    };
    return Enemy;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullets = new Array();
        this.counter = 0;
        this.lives = 3;
        this.spaceship = new Spaceship(50, 80, this);
        this.enemies = new Array();
        this.hud = document.createElement("score");
        document.body.appendChild(this.hud);
        for (var i = 0; i < 200; i++) {
            this.enemies.push(new Enemy(Math.floor((Math.random() * 1800) + 1), Math.floor((Math.random() * -10000) + -1), this));
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
            var c = _a[_i];
            for (var _b = 0, _c = this.enemies; _b < _c.length; _b++) {
                var e = _c[_b];
                if (c.x < e.x + e.width &&
                    c.x + c.width > e.x &&
                    c.y < e.y + e.height &&
                    c.height + c.y > e.y) {
                    this.counter++;
                    console.log(this.counter);
                    this.bullets.splice(this.bullets.indexOf(c), 1);
                    this.enemies.splice(this.enemies.indexOf(e), 1);
                    e.remove();
                    c.remove();
                }
            }
        }
        for (var _d = 0, _e = this.bullets; _d < _e.length; _d++) {
            var b = _e[_d];
            b.move();
        }
        for (var _f = 0, _g = this.enemies; _f < _g.length; _f++) {
            var e = _g[_f];
            e.move();
        }
        this.spaceship.move();
        this.hud.innerHTML = "score: " + this.counter;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function (b, c) {
        this.bullets.push(b, c);
    };
    Game.prototype.liveCounter = function () {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var e = _a[_i];
            this.lives--;
            console.log(this.lives);
            this.enemies.splice(this.enemies.indexOf(e), 1);
            if (this.lives < 0) {
                var g = document.createElement("gameover");
                document.body.appendChild(g);
                this.hud.innerHTML = "";
                g.innerHTML = "GAME OVER, YOUR SCORE: " + this.counter;
            }
        }
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y) {
        this.x = 20;
        this.y = 20;
        this.width = 7;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = -10;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Bullet.prototype.remove = function () {
        this.div.remove();
    };
    return Bullet;
}());
var hud = (function () {
    function hud() {
    }
    return hud;
}());
window.addEventListener("load", function () {
    var s = document.createElement("start");
    document.body.appendChild(s);
    s.innerHTML = "START";
    s.onclick = function (e) { new Game(); s.innerHTML = ""; };
});
var Spaceship = (function () {
    function Spaceship(x, y, g) {
        var _this = this;
        this.width = 80;
        this.height = 80;
        this.upKey = 87;
        this.upKeyHitn = false;
        this.upSpeed = 0;
        this.downKey = 83;
        this.downKeyHit = false;
        this.downSpeed = 0;
        this.leftKey = 65;
        this.leftKeyHit = false;
        this.leftSpeed = 0;
        this.rightKey = 68;
        this.rightKeyHit = false;
        this.rightSpeed = 0;
        this.shiftKey = 16;
        this.shiftKeyHit = false;
        this.shiftSpeed = 0;
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.spaceship = document.createElement("spaceship");
        this.spaceship.style.backgroundPositionX = "0vw";
        document.body.appendChild(this.spaceship);
        this.spaceship.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        console.log("X=" + this.posX + " Y=" + this.posY);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Spaceship.prototype.move = function () {
        if (this.posX < 1) {
            this.leftSpeed = 0;
        }
        else {
            this.posX -= this.leftSpeed;
            this.spaceship.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
        if (this.posX > 95) {
            this.rightSpeed = 0;
        }
        else {
            this.posX += this.rightSpeed;
            this.spaceship.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
    };
    Spaceship.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
    };
    Spaceship.prototype.onKeyUp = function (event) {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    };
    Spaceship.prototype.fire = function () {
        var rect = this.spaceship.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        var b = new Bullet(rect.left + 50, rect.top);
        var c = new Bullet(rect.left + 90, rect.top);
        this.game.addBullet(b, c);
    };
    return Spaceship;
}());
//# sourceMappingURL=main.js.map