'use strict';

var storeHours  = ['6am', '7am', '8am', '9am', '10am', 
                   '11am', '12am', '1pm', '2pm', '3pm', 
                   '4pm', '5pm', '6pm', '7pm', '8pm'];
var hourlySales = [];
var dailySales  = 0;

var globalTable = document.getElementById('storeTable');
var tableForm   = document.getElementById('storeForm');

function Store(location, minCustPerHr, maxCustPerHr, avgCookiesPerSale)
{
    this.location          = location;
    this.minCustPerHr      = minCustPerHr;
    this.maxCustPerHr      = maxCustPerHr;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.storeTotal        = 0;
    this.cookiesSold       = [];

    this.getCookieTotals();

    Store.stores.push(this);
}

Store.stores    = [];

Store.prototype.getCustPerHour = function()
{  
    return Math.floor(Math.random() * 
                     (this.maxCustPerHr - this.minCustPerHr + 1) + 
                      this.minCustPerHr);
}

Store.prototype.getAvgCookiesSold = function()
{
    return Math.floor(this.getCustPerHour() * this.avgCookiesPerSale + 1);
}

Store.prototype.getCookieTotals = function()
{
    for (var j = 0; j < storeHours.length; j++)
    {
        this.cookiesSold[j] = this.getAvgCookiesSold();
        this.storeTotal    += this.cookiesSold[j];
    }
}

function addHourlySales()
{
    for (var j = 0; j < storeHours.length; j++)
    {
        var colTotals = 0;

        for (var i = 0; i < Store.stores.length; i++)
        {
            colTotals += Store.stores[i].cookiesSold[j];
        }
        dailySales += colTotals;
        hourlySales.push(colTotals);
    }
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
        var storeTotals = document.createTextNode(Store.stores[j].storeTotal)

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
    addHourlySales();

    var tfoot = document.createElement('tfoot');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var totalsTH = document.createTextNode('Hourly Totals');

    th.appendChild(totalsTH);
    tr.appendChild(th);

    for (var j = 0; j < storeHours.length; j++)
    {
        var td = document.createElement('td');
        var totalsTD = document.createTextNode(hourlySales[j]);
        
        td.appendChild(totalsTD);
        tr.appendChild(td);
    } 

    var dailyTotalsTD = document.createElement('td');
    var dailyTotals = document.createTextNode(dailySales);
    
    dailyTotalsTD.appendChild(dailyTotals)
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

var firstAndPike  = new Store('1st and Pike',   23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3,  24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill   = new Store('Capitol Hill',   20, 38, 2.3);
var alki          = new Store('Alki',           2,  16, 4.6);


renderTableHead(globalTable);
renderTableBody(globalTable);
renderTableFoot(globalTable);