/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// opg a & b
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

window.onload = showtable(cars);

// filtering
var btn = document.getElementById("submit");
var price = document.getElementById("price");

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (price.value != null && price.value != 0) {
        cars_filtered = cars.filter(x => x.price < price.value);
        showtable(cars_filtered);
        console.log(price.value);
    } else {
        price.setAttribute("placeholder", "Enter a price!");
    }
});


function showtable(cars) {

// handling th elements
    var p;
    var head = "";

    for (p in cars[0]) {
        head += "<th>" + p + "</th>";
    }
    head = "<tr>" + head + "</tr>";

// handling td elements
    var data = cars.map(obj => {
        var str = "";
        for (p in obj) {
            str += "<td>" + obj[p] + "</td>" + "\r";
        }
        return "<tr>" + str + "</tr>";
    });

    datat = data.join('');
// appending the two
    var table = "<table>" + head + datat + "</table>";
    document.getElementById("div").innerHTML = table;

};



