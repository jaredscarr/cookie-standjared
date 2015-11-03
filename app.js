var pikePlace = {

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
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  },

  display:function() {
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

  }

}; //end pikePlace object


pikePlace.display();

var seaTac = {

  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],
  storeLoc: 'SeaTac Airport',

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  },

  display:function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var idNames = ['10amSeaTac', '11amSeaTac', '12pmSeaTac', '1pmSeaTac', '2pmSeaTac', '3pmSeaTac', '4pmSeaTac', '5pmSeaTac'];
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
    newUlist.appendChild(newListItem);
    newListItem.setAttribute('id', 'seaTacDaily');
    newListItem.setAttribute('class', 'items');

  }

}; //end seaTac object


seaTac.display();

var southCenter = {

  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],
  storeLoc: 'South Center Mall',

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  },

  display:function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var idNames = ['10amSouth', '11amSouth', '12pmSouth', '1pmSouth', '2pmSouth', '3pmSouth', '4pmSouth', '5pmSouth'];
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
    newUlist.appendChild(newListItem).setAttribute('id', 'southDaily');
    newListItem.setAttribute('class', 'items');

  }

}; //end southCenter object


southCenter.display();

var bellSquare = {

  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],
  storeLoc: 'Bellevue Square',

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  },

  display:function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var idNames = ['10amBell', '11amBell', '12pmBell', '1pmBell', '2pmBell', '3pmBell', '4pmBell', '5pmBell'];
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
    newUlist.appendChild(newListItem).setAttribute('id', 'bellDaily');
    newListItem.setAttribute('class', 'items');

  }

}; //end bellSquare object


bellSquare.display();

var alki = {

  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],
  storeLoc: 'Alki',

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (var i = 0; i < this.hours; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (var i = 0; i < this.hours; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal;
  },

  display:function() {
    var newListItem = 0;
    var newText = '';
    var times = ['10amPike', '11amPike', '12pmPike', '1pmPike', '2pmPike', '3pmPike', '4pmPike', '5pmPike'];
    var idNames = ['10amAlki', '11amAlki', '12pmAlki', '1pmAlki', '2pmAlki', '3pmAlki', '4pmAlki', '5pmAlki'];
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
      newUlist.appendChild(newListItem)
      newListItem.setAttribute('id', idNames[i]);
      newListItem.setAttribute('class', 'items');
    }

    var sold = this.getDailyTotal();
    newListItem = document.createElement('li');
    newText = document.createTextNode('Total ' + sold);
    newListItem.appendChild(newText);
    newUlist.appendChild(newListItem).setAttribute('id', 'alkiDaily');
    newListItem.setAttribute('class', 'items');

  }

}; //end alki object


alki.display();






