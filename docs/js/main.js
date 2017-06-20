var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = (function () {
    function Enemy(x, y, g) {
        this.width = 100;
        this.height = 80;
        this.x = 100;
        this.y = 100;
        this.game = g;
        this.x = x;
        this.y = y;
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
    Enemy.prototype.hpState = function (a) {
        if (a < 0) {
            this.remove;
        }
    };
    return Enemy;
}());
var big_plane = (function (_super) {
    __extends(big_plane, _super);
    function big_plane(x, y, g) {
        var _this = _super.call(this, x, y, g) || this;
        _this.width = 100;
        _this.height = 80;
        _this.x = 100;
        _this.y = 100;
        _this.hp = 2;
        _this.game = g;
        _this.x = x;
        _this.y = y;
        _this.speed = Math.floor((Math.random() * 2) + 1);
        _this.enemy = document.createElement("enemy3");
        document.body.appendChild(_this.enemy);
        _super.prototype.move.call(_this);
        return _this;
    }
    big_plane.prototype.remove = function () {
        _super.prototype.remove.call(this);
    };
    return big_plane;
}(Enemy));
var small_plane = (function (_super) {
    __extends(small_plane, _super);
    function small_plane(x, y, g) {
        var _this = _super.call(this, x, y, g) || this;
        _this.width = 100;
        _this.height = 80;
        _this.x = 100;
        _this.y = 100;
        _this.hp = 1;
        _this.game = g;
        _this.x = x;
        _this.y = y;
        _this.speed = Math.floor((Math.random() * 1.3) + 1);
        _this.enemy = document.createElement("enemy2");
        document.body.appendChild(_this.enemy);
        _super.prototype.move.call(_this);
        return _this;
    }
    small_plane.prototype.remove = function () {
        _super.prototype.remove.call(this);
    };
    return small_plane;
}(Enemy));
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
        for (var i = 0; i < 100; i++) {
            this.enemies.push(new small_plane(Math.floor((Math.random() * 1800) + 1), Math.floor((Math.random() * -10000) + -1), this));
            this.enemies.push(new big_plane(Math.floor((Math.random() * 1800) + 1), Math.floor((Math.random() * -10000) + -1), this));
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
                    if (this.counter > 49) {
                        console.log("MEMES");
                    }
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
                this.enemies = [];
                this.bullets = [];
                window.setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }
    };
    Game.prototype.ScoreCounter = function () {
        if (this.counter > 49) {
            console.log("VIVON ZULUL");
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
    var d = document.createElement("guide");
    document.body.appendChild(s);
    document.body.appendChild(d);
    d.innerHTML = "A & D to move SHIFT to shoot";
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