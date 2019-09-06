/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const outer = document.getElementById("buttons");
const display = document.getElementById("display");
const calc = document.getElementById("calculate");
//outer.addEventListener('click',function(e){
//    const clicked = e.target.innerText;
//    console.log(clicked);
//});


function displayClicked(event) {
    const clicked = event.target;
    if (clicked.innerText !== "=" && clicked.id !== "buttons") {
        display.innerHTML += clicked.innerText;
    }
}
function calculate(event) {
    event.stopPropagation();
    var text = display.innerHTML;
    if (text.indexOf("*") !== -1) {
        display.innerHTML = Number(text.split("*")[0]) * Number(text.split("*")[1]);
    }
}

outer.onclick = displayClicked;
calc.onclick = calculate;