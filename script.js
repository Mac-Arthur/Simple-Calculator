
const display = document.getElementById("display");

function ShowDisplay(input){
display.value += input;
}

function ClearDisplay(){
    display.value ="";
}
function Calculate(){
    display.value = eval(display.value);
}
function Percentage(){
    display.value=display.value/100;
}
function Backspace(){
    display.value = display.value.slice(0,-1);
}