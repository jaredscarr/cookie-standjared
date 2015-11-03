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

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (i =0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  }

}; //end pikePlace object

console.log(pikePlace.pushToArray());
console.log(pikePlace.getDailyTotal());

//start seaTac object
var seaTac = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (i =0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  }

}; //end seaTac object

console.log(seaTac.pushToArray());
console.log(seaTac.getDailyTotal());

//start southCenter object
var southCenter = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (i =0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  }

}; //end southCenter object

console.log(southCenter.pushToArray());
console.log(southCenter.getDailyTotal());

//start bellSquare object
var bellSquare = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (i =0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  }

}; //end bellSquare object

console.log(bellSquare.pushToArray());
console.log(bellSquare.getDailyTotal());

//start alki object
var alki = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,
  avgDailyTotal: 0,
  avgCookiesPerHr: [],

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },

  pushToArray:function() {
    for (i = 0; i < 8; i++) {
    this.avgCookiesPerHr.push(Math.floor(this.getHourlyTotal())); // pushes to array
    }
    return this.avgCookiesPerHr;
  },

  getDailyTotal:function() {
    for (i =0; i < 8; i++) {
      this.avgDailyTotal += this.avgCookiesPerHr[i];
    }
    return this.avgDailyTotal; // daily total
  }

}; //end alki object

console.log(alki.pushToArray());
console.log(alki.getDailyTotal());


