'use strict';

var storeHours  = ['6am', '7am', '8am', '9am', '10am','11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var newStore = document.getElementById('add-store');

function Store(location, minCustPerHr, maxCustPerHr, avgCookiesPerSale)
{
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalStoreSales = 0;
  this.cookiesSoldPerHr = [];

  this.getSalesPerHr();

  Store.allStores.push(this);
}
Store.allStores = [];

Store.prototype.getSalesPerHr = function()
{
  for (var j = 0; j < storeHours.length; j++)
  {
    var numOfCustomers = rando(this.minCustPerHr, this.maxCustPerHr);
    var hourlySales = Math.floor(numOfCustomers * this.avgCookiesPerSale);

    this.cookiesSoldPerHr.push(hourlySales);
    this.totalStoreSales += hourlySales;
  }
};


function rando(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);

  var randomNumber = Math.floor(Math.random() * ( max - min +1)) + min;

  return randomNumber;
}


function addElement(element, content, parent)
{
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);

  newElement.appendChild(newContent);
  parent.appendChild(newElement);

  return newElement;
}


function renderTableHead()
{
  thead.innerHTML = '';

  var tr = addElement('tr', '', thead);
  addElement('th', '', tr);

  for (var i = 0; i < storeHours.length; i++)
  {
    addElement('th', storeHours[i], tr);
  }

  addElement('th', 'Store Totals', tr);
}


function renderTableBody()
{
  tbody.innerHTML = '';

  for (var j = 0; j < Store.allStores.length; j++)
  {
    var tr = addElement('tr', '', tbody);

    addElement('th', Store.allStores[j].location, tr);

    for (var i = 0; i < storeHours.length; i++)
    {
      addElement('td', Store.allStores[j].cookiesSoldPerHr[i], tr);
    }

    addElement('td', Store.allStores[j].totalStoreSales, tr);
  }
}


function renderTableFoot()
{
  tfoot.innerHTML = '';

  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Totals', tr);

  var overallTotal = 0;

  for (var j = 0; j < storeHours.length; j++)
  {
    var hourlyTotals = 0;

    for (var i = 0; i < Store.allStores.length; i++)
    {
      hourlyTotals += Store.allStores[i].cookiesSoldPerHr[j];
      overallTotal += Store.allStores[i].cookiesSoldPerHr[j];
    }
    addElement('td', hourlyTotals, tr);
  }
  addElement('td', overallTotal, tr);
}


function addStore(event)
{
  event.preventDefault();

  var newStoreName = event.target.name.value;
  var newMinCust   = event.target.min.value;
  var newMaxCust   = event.target.max.value;
  var newCookieAvg = event.target.avg.value;

  new Store(newStoreName, newMinCust, newMaxCust, newCookieAvg);

  renderTableBody();
  renderTableFoot();
}


newStore.addEventListener('submit', addStore);

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


renderTableHead();
renderTableBody();
renderTableFoot();
