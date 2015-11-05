var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var storeNames = [];

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
    tableData.setAttribute("className", "tableData");

    for (var i = 0; i < times.length; i++) {
      var tableData = document.createElement('td');
      var newText = document.createTextNode(this.avgCookiesPerHr[i]);
      tableData.appendChild(newText);
      tableRow.appendChild(tableData);
      tableData.setAttribute("className", "tableData");
    }

    var sold = this.getDailyTotal();
    var tableData = document.createElement('td');
    var newText = document.createTextNode(sold);
    tableData.appendChild(newText);
    tableRow.appendChild(tableData);
    tableData.setAttribute("className", "tableData");
  };

} //end store constructor

var pikePlace = new CookieStore('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStore('South Center Mall', 11, 38, 1.9);
var bellSquare = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);

var table = document.createElement('table');
document.body.appendChild(table); //Makes table by appending the above
table.setAttribute('className', 'tables')

var tableRow = document.createElement('tr');
table.appendChild(tableRow);
tableRow.setAttribute('className', 'tableRow')

var tableHeader = document.createElement('th');
var newText = document.createTextNode(' ');
tableHeader.appendChild(newText);
tableRow.appendChild(tableHeader);
tableHeader.setAttribute("className", "tableHeaders");

for (var i = 0; i < times.length; i++) {
  var tableHeader = document.createElement('th');
  var newText = document.createTextNode(times[i]);
  tableHeader.appendChild(newText);
  tableRow.appendChild(tableHeader);
  tableHeader.setAttribute("className", "tableHeaders");
}

var tableHeader = document.createElement('th');
var newText = document.createTextNode('Total');
tableHeader.appendChild(newText);
tableRow.appendChild(tableHeader);
tableHeader.setAttribute("className", "tableHeaders");
// variables for subFunction
// var storeInput = document.getElementById('store');
// var minInput = document.getElementById('min');
// var maxInput = document.getElementById('max');
// var avgInput = document.getElementById('avg');
//begin submission button function

var handleInput = function (event) {
  event.preventDefault();
  if (!event.target.store.value || !event.target.min.value || !event.target.max.value ||!event.target.avg.value) {
    return alert('Field cannot be empty.');
  }

  var storeInput = event.target.store.value;
  var minInput = event.target.min.value;
  var maxInput = event.target.max.value;
  var avgInput = event.target.avg.value;

  var newStore = new CookieStore (storeInput, minInput, maxInput, avgInput); // might need Number() on min, max, avg
  newStore.display();
  storeNames.push(storeInput);
}

storeInput = null;
minInput = null;
maxInput = null;
avgInput = null;

//event listener for form submition
tableForm.addEventListener('submit', handleInput);


//end subFunction

pikePlace.display();
seaTac.display();
southCenter.display();
bellSquare.display();
alki.display();
