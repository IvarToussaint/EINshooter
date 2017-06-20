window.addEventListener("load", function() {
    var s = document.createElement("start");
    var d = document.createElement("guide");
    
    document.body.appendChild(s);
    document.body.appendChild(d);

    d.innerHTML = "A & D to move SHIFT to shoot"
    s.innerHTML = "START";
    s.onclick = (e:MouseEvent) => {new Game(); s.innerHTML = "";};
});