// opg a & b
var outer = document.getElementById("outer");
var print = function(e){
  console.log("hi from div" + e.target.id);  
};
outer.onclick = print;

// opg c
printp = function(e){
  document.getElementById("p").innerHTML = "hi from div" + e.target.id;  
};
outer.onclick = printp;
