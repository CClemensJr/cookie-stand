'use strict';

var storeHours  = ['6am', '7am', '8am', '9am', '10am', 
                   '11am', '12am', '1pm', '2pm', '3pm', 
                   '4pm', '5pm', '6pm', '7pm', '8pm'];
var globalTable = document.createElement('table');
Store.stores    = [];

function Store(location, minCustPerHr, maxCustPerHr, avgCookiesPerSale)
{
    this.location            = location;
    this.minCustPerHr        = minCustPerHr;
    this.maxCustPerHr        = maxCustPerHr;
    this.avgCookiesPerSale   = avgCookiesPerSale;
    this.storeTotal          = 0
    this.cookiesSold         = [];
    this.totalCookiesHour    = [];

    this.getCookieTotals();

    Store.stores.push(this);
}

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
    for (var i = 0; i < storeHours.length; i++)
    {
        this.cookiesSold[i] = this.getAvgCookiesSold();
        this.storeTotal    += this.cookiesSold[i];
    }

    /*for (var i in Store.stores)
    {
        this.totalCookiesHour = this.totalCookiesStore[0];
    }
    console.log('Hourly Cookie Totals' + this.totalCookiesHour);*/
}
/*Store.prototype.getAvgCookiesSoldPerHr = function()
{
    var cookieArray = [];

    for (var i = 0; i < storeHours.length; i++)
    {
        cookieArray[i] = this.getAvgCookiesSold();
    }

    return cookieArray;
}

Store.prototype.totalCookiesSold = function()
{
    var totalCookies = 0;

    for (var i = 0; i < storeHours.length; i++)
    {
        totalCookies += this.getAvgCookiesSoldPerHr()[i];
    }

    return totalCookies;
}*/

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

/*function renderTableFoot(table)
{
    var hourlyTotals = ['Totals'];
    var cookies = 0;

    var tfoot = document.createElement('tfoot');

    for (var i = 0; i < storeHours.length; i++)
    {
        var colTotals   = document.createTextNode(hourlyTotals[0]);
        var th          = document.createElement('th');
        var td
        var tr          = document.createElement('tr');

        th.appendChild(colTotals);
        tr.appendChild(th);

        for (var j = 0; j < Store.locations.length; j++)
        {
            cookies += Store.locations[j].getAvgCookiesSoldPerHr()[i];
        }
        hourlyTotals.push(cookies);



        console.log(hourlyTotals);
    } 
}*/

var firstAndPike  = new Store('1st and Pike',   23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3,  24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill   = new Store('Capitol Hill',   20, 38, 2.3);
var alki          = new Store('Alki',           2,  16, 4.6);


renderTableHead(globalTable);
renderTableBody(globalTable);
//renderTableFoot(globalTable);