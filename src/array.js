/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
console.log(all);
console.log(all.join());
console.log(all.join('-'));
all.push("Lone","Gitte");
all.unshift("Hans","Kurt");
console.log(all);
all.pop();
all.shift();
console.log(all);
all.splice(3,1);
all.splice(4,1);
console.log(all);
all.reverse();
console.log(all);
all.sort();
console.log(all);
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(all);
var map1 = all.map(x => x.toString().toUpperCase());
console.log(map1);
var filtered = all.filter(x => x.startsWith("L") || x.startsWith("l"));
console.log(filtered);
