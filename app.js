var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

function CookieStore(storeLoc, minPersons, maxPersons, avgCookiesPerCust) {
  this.storeLoc = storeLoc;
  this.minPersons = minPersons;
  this.maxPersons = maxPersons;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.avgDailyTotal = 0;
  this.avgCookiesPerHr = [];

  this.customersPerHr = function(max, min) {
    return Math.random() * (max - min + 1) + min;
  };

  this.getHourlyTotal = function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  };

  this.pushToArray = function() {
    for (var i = 0; i < times.length; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  };

  this.getDailyTotal = function() {
    for (var i = 0; i < times.length; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  };

  this.display = function() {
    this.pushToArray();

    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var tableData = document.createElement('td');
    var newText = document.createTextNode(this.storeLoc);
    tableData.appendChild(newText);
    tableRow.appendChild(tableData);
    tableData.setAttribute("class", "tableData");

    for (var i = 0; i < times.length; i++) {
      var tableData = document.createElement('td');
      var newText = document.createTextNode(this.avgCookiesPerHr[i]);
      tableData.appendChild(newText);
      tableRow.appendChild(tableData);
      tableData.setAttribute("class", "tableData");
    }

    var sold = this.getDailyTotal();
    var tableData = document.createElement('td');
    var newText = document.createTextNode(sold);
    tableData.appendChild(newText);
    tableRow.appendChild(tableData);
    tableData.setAttribute("class", "tableData");
  };

} //end store constructor

var pikePlace = new CookieStore('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStore('South Center Mall', 11, 38, 1.9);
var bellSquare = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);

var table = document.createElement('table');
document.body.appendChild(table); //Makes table by appending the above

var tableRow = document.createElement('tr');
table.appendChild(tableRow);

var tableHeader = document.createElement('th');
var newText = document.createTextNode(' ');
tableHeader.appendChild(newText);
tableRow.appendChild(tableHeader);
tableHeader.setAttribute("class", "tableHeaders");

for (var i = 0; i < times.length; i++) {
  var tableHeader = document.createElement('th');
  var newText = document.createTextNode(times[i]);
  tableHeader.appendChild(newText);
  tableRow.appendChild(tableHeader);
  tableHeader.setAttribute("class", "tableHeaders");
}

var tableHeader = document.createElement('th');
var newText = document.createTextNode('Total');
tableHeader.appendChild(newText);
tableRow.appendChild(tableHeader);
tableHeader.setAttribute("class", "tableHeaders");

pikePlace.display();
seaTac.display();
southCenter.display();
bellSquare.display();
alki.display();
