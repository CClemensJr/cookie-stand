'use strict';

var storeHours  = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12am', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var globalTable = document.getElementById('storeTable');
var tableForm   = document.getElementById('storeForm');

function Store(location, minCustPerHr, maxCustPerHr, avgCookiesPerSale)
{
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalStoreSales = 0;
  this.cookiesSold = [];

  this.getCookieTotals();

  Store.stores.push(this);
}

Store.stores = [];

Store.prototype.getCookieTotals = function()
{
  for (var j = 0; j < storeHours.length; j++)
  {
    var numOfCustomers = getCustPerHour(this.minCustPerHr, this.maxCustPerHr);
    var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

    this.cookiesSold.push(hourlySales);
    this.totalStoreSales += hourlySales;
  }
};


function getCustPerHour(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderTableHead(table) {
  var thead         = document.createElement('thead');
  var tr            = document.createElement('tr');
  var emptyTH       = document.createElement('th');
  var storeTotalsTH = document.createElement('th');
  var storeTotals   = document.createTextNode('Store Totals');

  storeTotalsTH.appendChild(storeTotals);
  tr.appendChild(emptyTH);

  for (var i = 0; i < storeHours.length; i++)
  {
    var th        = document.createElement('th');
    var timeOfDay = document.createTextNode(storeHours[i]);

    th.appendChild(timeOfDay);
    tr.appendChild(th);

  }

  tr.appendChild(storeTotalsTH);
  thead.appendChild(tr);
  table.appendChild(thead);
  document.body.appendChild(table);
}

function renderTableBody(table)
{
  var tbody = document.createElement('tbody');

  for (var j = 0; j < Store.stores.length; j++)
  {
    var tr          = document.createElement('tr');
    var th          = document.createElement('th');
    var totalsTD    = document.createElement('td');
    var storeName   = document.createTextNode(Store.stores[j].location);
    var storeTotals = document.createTextNode(Store.stores[j].totalStoreSales);

    th.appendChild(storeName);
    tr.appendChild(th);

    for (var i = 0; i < storeHours.length; i++)
    {
      var td          = document.createElement('td');
      var cookieSales = document.createTextNode(Store.stores[j].cookiesSold[i]);

      td.appendChild(cookieSales);
      tr.appendChild(td);
    }

    totalsTD.appendChild(storeTotals);
    tr.appendChild(totalsTD);
    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
  document.body.appendChild(table);
}

function renderTableFoot(table)
{
  var tfoot = document.createElement('tfoot');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  var totalsTH = document.createTextNode('Hourly Totals');

  tfoot.innerHTML = '';
  th.appendChild(totalsTH);
  tr.appendChild(th);

  var overallTotal = 0;

  for (var j = 0; j < storeHours.length; j++)
  {
    var hourlyTotals = 0;

    for (var k = 0; k < Store.stores.length; k++)
    {
      hourlyTotals += Store.stores[k].cookiesSold[j];
      overallTotal += Store.stores[k].cookiesSold[j];
    }
    var td = document.createElement('td');
    var totalsTD = document.createTextNode(hourlyTotals);

    td.appendChild(totalsTD);
    tr.appendChild(td);
  }


  var dailyTotalsTD = document.createElement('td');
  var dailyTotals = document.createTextNode(overallTotal);

  dailyTotalsTD.appendChild(dailyTotals);
  tr.appendChild(dailyTotalsTD);
  tfoot.appendChild(tr);
  table.appendChild(tfoot);
  document.body.appendChild(table);
}

function addStore(event)
{
  event.preventDefault();

  var newStoreName = event.target.storeName.value;
  var newMinCust   = event.target.minCustomers.value;
  var newMaxCust   = event.target.maxCustomers.value;
  var newCookieAvg = event.target.cookiesPerSale.value;

  //console.log(newStoreName + newMinCust + newMaxCust + newCookieAvg);
  new Store(newStoreName, newMinCust, newMaxCust, newCookieAvg);

  globalTable.innerHTML = '';

  renderTableHead(globalTable);
  renderTableBody(globalTable);
  renderTableFoot(globalTable);
}


tableForm.addEventListener('submit', addStore);

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


renderTableHead(globalTable);
renderTableBody(globalTable);
renderTableFoot(globalTable);
