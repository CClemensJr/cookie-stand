'use strict';

var storeHours   = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var firstAndPike =
{
  location          : '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale : 6.3,
  cookiesPerHr      : [],
  totalCookies      : 0,

  getTotals : function()
  {
    for (var i = 0; i < storeHours.length; i++)
    {
      var numOfCustomers = getCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

      this.cookiesPerHr.push(hourlySales);
      this.totalCookies += hourlySales;
    }
  }
};

var seaTacAirport =
{
  location          : 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale : 1.2,
  cookiesPerHr      : [],
  totalCookies      : 0,

  getTotals : function()
  {
    for (var i = 0; i < storeHours.length; i++)
    {
      var numOfCustomers = getCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

      this.cookiesPerHr.push(hourlySales);
      this.totalCookies += hourlySales;
    }
  }
};

var seattleCenter =
{
  location          : 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerSale : 3.7,
  cookiesPerHr      : [],
  totalCookies      : 0,

  getTotals : function()
  {
    for (var i = 0; i < storeHours.length; i++)
    {
      var numOfCustomers = getCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

      this.cookiesPerHr.push(hourlySales);
      this.totalCookies += hourlySales;
    }
  }
};

var capitolHill =
{
  location          : 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerSale : 2.3,
  cookiesPerHr      : [],
  totalCookies      : 0,

  getTotals : function()
  {
    for (var i = 0; i < storeHours.length; i++)
    {
      var numOfCustomers = getCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

      this.cookiesPerHr.push(hourlySales);
      this.totalCookies += hourlySales;
    }
  }
};

var alki =
{
  location          : 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerSale : 4.6,
  cookiesPerHr      : [],
  totalCookies      : 0,

  getTotals : function()
  {
    for (var i = 0; i < storeHours.length; i++)
    {
      var numOfCustomers = getCustPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
      var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

      this.cookiesPerHr.push(hourlySales);
      this.totalCookies += hourlySales;
    }
  }
};

function getCustPerHour(min, max)
{
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
}

firstAndPike.getTotals();
var store1 = document.getElementById('first-and-pike');
store1.innerHTML = firstAndPike.location;
for (var i = 0; i < storeHours.length; i++)
{
  var li   = document.createElement('li');
  var data = document.createTextNode(storeHours[i] +
                                          firstAndPike.cookiesPerHr[i]);
  li.appendChild(data);

  var position = document.getElementsByTagName('ul')[0];
  position.appendChild(li);
}
var h3 = document.getElementById('first-and-pike-data');
var total = document.createTextNode('Total Cookies: ' + firstAndPike.totalCookies);
h3.appendChild(total);



seaTacAirport.getTotals();
var store2 = document.getElementById('seatac-airport');
store2.innerHTML = seaTacAirport.location;
for ( i = 0; i < storeHours.length; i++)
{
  var newEl   = document.createElement('li');
  var newText = document.createTextNode(storeHours[i] +
                                          seaTacAirport.cookiesPerHr[i]);
  newEl.appendChild(newText);

  position = document.getElementsByTagName('ul')[1];
  position.appendChild(newEl);
}
h3 = document.getElementById('seatac-airport-data');
total = document.createTextNode('Total Cookies: ' + seaTacAirport.totalCookies);
h3.appendChild(total);



seattleCenter.getTotals();
var store3 = document.getElementById('seattle-center');
store3.innerHTML = seattleCenter.location;
for ( i = 0; i < storeHours.length; i++)
{
  newEl = document.createElement('li');
  newText = document.createTextNode(storeHours[i] +
                                          seattleCenter.cookiesPerHr[i]);
  newEl.appendChild(newText);

  position = document.getElementsByTagName('ul')[2];
  position.appendChild(newEl);
}
h3 = document.getElementById('seattle-center-data');
total = document.createTextNode('Total Cookies: ' + seattleCenter.totalCookies);
h3.appendChild(total);



capitolHill.getTotals();
var store4 = document.getElementById('capitol-hill');
store4.innerHTML = capitolHill.location;
for ( i = 0; i < storeHours.length; i++)
{
  newEl = document.createElement('li');
  newText = document.createTextNode(storeHours[i] +
                                          capitolHill.cookiesPerHr[i]);
  newEl.appendChild(newText);

  position = document.getElementsByTagName('ul')[3];
  position.appendChild(newEl);
}
h3 = document.getElementById('capitol-hill-data');
total = document.createTextNode('Total Cookies: ' + capitolHill.totalCookies);
h3.appendChild(total);




alki.getTotals();
var store5 = document.getElementById('alki');
store5.innerHTML = alki.location;
for ( i = 0; i < storeHours.length; i++)
{
  newEl = document.createElement('li');
  newText = document.createTextNode(storeHours[i] +
                                          alki.cookiesPerHr[i]);
  newEl.appendChild(newText);

  position = document.getElementsByTagName('ul')[4];
  position.appendChild(newEl);
}
h3 = document.getElementById('alki-data');
total = document.createTextNode('Total Cookies: ' + alki.totalCookies);
h3.appendChild(total);
