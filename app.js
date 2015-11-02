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

}; //end pikePlace object

//code
for (i = 0; i < 8; i++) {
  pikePlace.avgCookiesPerHr.push(Math.floor(pikePlace.getHourlyTotal()));
  pikePlace.avgDailyTotal += pikePlace.avgCookiesPerHr[i];
}

console.log(pikePlace.avgCookiesPerHr);
console.log(pikePlace.avgDailyTotal)
