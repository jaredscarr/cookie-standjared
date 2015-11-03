function CookieStore(storeLoc, minPersons, maxPersons, avgCookiesPerCust) {

  this.hours = 8; // if you update hours you need to manually update the idNames variable and times variable
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
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  };

  this.getDailyTotal = function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  };

  this.display = function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var idNames = ['10amPike', '11amPike', '12pmPike', '1pmPike', '2pmPike', '3pmPike', '4pmPike', '5pmPike'];
    var liItems = this.pushToArray();
    console.log(liItems);

    var store = document.createElement('h4');
    store.innerHTML = this.storeLoc;
    document.body.appendChild(store);

    var newUlist = document.createElement('ul');
    newUlist.setAttribute('class', 'listItem');
    document.body.appendChild(newUlist);

    for (var i = 0; i < this.hours; i++) {

      newListItem = document.createElement('li');
      newText = document.createTextNode(times[i] + ' ' + liItems[i]);
      newListItem.appendChild(newText);
      newUlist.appendChild(newListItem);
      newListItem.setAttribute('id', idNames[i]);
      newListItem.setAttribute('class', 'items');
    }

    var sold = this.getDailyTotal();
    newListItem = document.createElement('li');
    newText = document.createTextNode('Total ' + sold);
    newListItem.appendChild(newText);
    newUlist.appendChild(newListItem).setAttribute('id', 'pikeDaily');
    newListItem.setAttribute('class', 'items');

  };

} //end store constructor

var pikePlace = new CookieStore('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStore('South Center Mall', 11, 38, 1.9);
var bellSquare = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);

pikePlace.display();
seaTac.display();
southCenter.display();
bellSquare.display();
alki.display();
