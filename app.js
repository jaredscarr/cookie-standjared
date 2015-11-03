//objects
//start pikePlace object
var pikePlace = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],
  storeLoc: 'Pike Place Market',

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (var i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  },

  display:function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
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
      newUlist.appendChild(newListItem).setAttribute('id', times[i]);
      newListItem.setAttribute('class', 'items');
    }

    var sold = this.getDailyTotal();
    newListItem = document.createElement('li');
    newText = document.createTextNode('Total ' + sold);
    newListItem.appendChild(newText);
    newUlist.appendChild(newListItem).setAttribute('id', 'pikeDaily');
    newListItem.setAttribute('class', 'items');

  }

}; //end pikePlace object


pikePlace.display();
