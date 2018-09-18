//Replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances
//Replacing the lists of data for each store, and building a single table of data instead
//show the total amount of projected cookie needs at each location with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and [STRETCH GOAL] a footer row of totals for each column
'use strict';

var storeHours   = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', 
                    '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', 
                    '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

function Store(location, minCustPerHr, maxCustPerHr, avgCookiesPerSale)
{
    this.location          = location;
    this.minCustPerHr      = minCustPerHr;
    this.maxCustPerHr      = maxCustPerHr;
    this.avgCookiesPerSale = avgCookiesPerSale;

    Store.locations.push[this];
}

Store.locations = [];

var firstAndPike = 
{
    storeLoc          : '1st and Pike',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65, 
    avgCookiesPerSale : 6.3,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages
}

var seaTacAirport = 
{
    location          : 'SeaTac Airport',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerSale : 1.2,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var seattleCenter = 
{
    location          : 'Seattle Center',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 3.7,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var capitolHill = 
{
    location          : 'Capitol Hill',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 2.3,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var alki = 
{
    location          : 'Alki',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerSale : 4.6,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

function getCustPerHour()
{  
    return Math.floor(Math.random() * 
                     (this.maxCustPerHr - this.minCustPerHr + 1) + 
                      this.minCustPerHr);
}

function getCookieAmount() 
{
    return Math.floor((this.randCustPerHour() * this.avgCookiesPerSale));
}

function getHourlyCookieAverages()
{
    var cookieArray = [];

    for (var i = 0; i < storeHours.length; i++)
    {
        cookieArray[i] = this.simAmtOfCookies();
    }

    return cookieArray;
}

var store1 = document.getElementById("first-and-pike");
store1.textContent = firstAndPike.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          firstAndPike.avgCookiesPerHour()[i] +
                                          ' cookies');
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);
}

var store2 = document.getElementById("seatac-airport");
store2.textContent = seaTacAirport.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          seaTacAirport.avgCookiesPerHour()[i] +
                                          ' cookies');
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[1];
    position.appendChild(newEl);
}

var store3 = document.getElementById("seattle-center");
store3.innerHTML = seattleCenter.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          seattleCenter.avgCookiesPerHour()[i] +
                                          ' cookies');
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[2];
    position.appendChild(newEl);
}

var store4 = document.getElementById("capitol-hill");
store4.innerHTML = capitolHill.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          capitolHill.avgCookiesPerHour()[i]  +
                                          ' cookies');
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[3];
    position.appendChild(newEl);
}

var store5 = document.getElementById("alki");
store5.innerHTML = alki.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          alki.avgCookiesPerHour()[i] +
                                          ' cookies');
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[4];
    position.appendChild(newEl);
}