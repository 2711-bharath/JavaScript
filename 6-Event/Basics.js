function click() {
    alert("Button was clicked");
}

function doubleClick() {
    document.getElementById("myP").innerHTML = "Events in JavaScript";
}

function mouseOver() {
    document.getElementById("demo").style.color = "blue";
}

function mouseOut() {
    document.getElementById("demo").style.color = "magenta";
}

function focusInput(x) {
    x.style.color = "white";
    x.style.background = "deepskyblue";
}

function focusOut(x) {
    x.style = "None"
}

function writeText() {
    var x = document.getElementById("myInput").value;
    document.getElementById("input_name").innerHTML = "Name entered: " + x;
}

function onToggle() {
    alert("Toggle event occured")
}

function eventTarget(event) {
    alert("Tagname is", event.target.nodeName)
}