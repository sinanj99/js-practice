/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//a,b&c
var submit = document.getElementById("submit");
var rfirst = document.getElementById("removef");
var rlast = document.getElementById("removel");
var div = document.getElementById("div");
var names = [];

submit.addEventListener('click', function (e) {
    e.preventDefault();
    names.push(document.getElementById("name").value);
    var li = names.map(x => "<li>" + x + "</li>");
    li.unshift("<ul>");
    li.push("</ul>");
    div.innerHTML = li.join('\r');
});
rfirst.addEventListener('click', function (e) {
    e.preventDefault();
    names.shift();
    var li = names.map(x => "<li>" + x + "</li>");
    li.unshift("<ul>");
    li.push("</ul>");
    div.innerHTML = li.join('\r');
});
rlast.addEventListener('click', function (e) {
    e.preventDefault();
    names.pop();
    var li = names.map(x => "<li>" + x + "</li>");
    li.unshift("<ul>");
    li.push("</ul>");
    div.innerHTML = li.join('\r');
});



