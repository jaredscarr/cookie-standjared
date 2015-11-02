//objects
//start pikePlace object
var pikePlace = {
  //variables
  hours: 8,
  maxPersons: 88,
  minPersons: 17,
  avgCookiesPerCust: 5.2,

  //arrays
  avgCookiesPerHr: [],

  //functions

  customersPerHr:function(max, min) {
    return Math.random() * (max - min + 1) + min;
  },

  getHourlyTotal:function() {
    return this.customersPerHr(this.maxPersons,this.minPersons) * this.avgCookiesPerCust;
  },
}; //end pikePlace object

for (i = 0; i < 8; i++) {
  pikePlace.avgCookiesPerHr.push(Math.floor(pikePlace.getHourlyTotal()));
}

console.log(pikePlace.avgCookiesPerHr);

