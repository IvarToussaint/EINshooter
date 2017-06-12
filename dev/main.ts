window.addEventListener("load", function() {
    var s = document.createElement("start");
    document.body.appendChild(s);
    s.innerHTML = "START";
    s.onclick = (e:MouseEvent) => {new Game(); s.innerHTML = "";};
});