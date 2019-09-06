/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// opg a:
var elements = document.getElementsByTagName("div");

for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    elements[i].style.backgroundColor = "blue";
}

// opg b:
var color = function () {
    document.getElementById("1").style.backgroundColor = "red";
    document.getElementById("2").style.backgroundColor = "aqua";
    document.getElementById("3").style.backgroundColor = "purple";
};
var btn = document.getElementById("btn");
btn.onclick = color;







