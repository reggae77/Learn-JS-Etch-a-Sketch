/*Initial configuration + variables +start */
var numberGridElements = 2500;
const container = document.querySelector('#container');
starter();

/* Event Listeners */
/* event bubbling: 
https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line */
document.addEventListener('mouseover', function(e){
    if(e.target.tagName=="DIV"){
        e.target.style.backgroundColor ="black";
    }
  })

/* button Element */
document.getElementById("button").addEventListener("click", clearEtchASketch);


function starter(){
/* Create div Elements, give Attribut, set it as child from container */
for(let i = 0; i< numberGridElements;i++){
    let div = document.createElement("div");
    div.setAttribute("id","element");
    div.setAttribute("name","element");
    container.appendChild(div);
    }
}

function clearEtchASketch(){
/* 
1. Clear Elements Remove from dom
2. Userinput
3. starter*/
clear();
clearField();
userinput();
document.getElementById("container").style.setProperty("--number-Grid-Elements", Math.sqrt(numberGridElements));
starter();
}

function clear(){
    /* save all Elements in grid and reset their backgroundcolor */
var grid = document.getElementsByName("element");
var z = Array.from(grid);
for (let i=0;  i<z.length; i++){
    z[i].style.backgroundColor ="white";
    }

}

function clearField(){
    /* save all Elements in grid and remove them from DOM */
    var grid = document.getElementsByName("element");
    var z = Array.from(grid);
    for (let i=0;  i<z.length; i++){
        container.removeChild(z[i]);
        }
}

function userinput(){
    numberGridElements = prompt("Geben Geben Sie die Anzahl der Elemente des ETCH-A-SKETCH für diese Seite ein", "");
    /* Beispiel: 25 % sqrt(25) = 0*/
    while(numberGridElements % Math.sqrt(numberGridElements) != 0){
        numberGridElements = prompt("Bitte eine Anzahl, dessen Wurzel zu einem Integer führt");
    }
}