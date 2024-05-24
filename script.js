
let color = document.getElementById('circle');
let shapes = document.getElementById('shape');
let btn = document.querySelectorAll("button");

btn[0].addEventListener("click", changeColor);

function genarateColor(){
    let randomColor = Math.floor(Math.random() * 255);
    return randomColor;
}

function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    color.style.backgroundColor = newColor;
}

btn[1].addEventListener("click", changeShape);
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idName = randomShape();
    shapes.id = idName;
}