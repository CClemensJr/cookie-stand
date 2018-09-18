//DONE - 1. Create objects for each location
//DONE - 2. Add minHourlyCustomers
//DONE - 3. Add maxHourlyCustomers
//DONE - 4. Add avgCookiesPerSale
//DONE - 5. Create a randCustPerHour method that generates a random number of cust/hr
//DONE - 6. Calculate the simulated amount of cookies purchased for each hour at each location using avgCookiesPerSale and randCustPerHour
//DONE - 7. Store results of calculation in an array
//8. Display values of each array as an unordered list in the browser
//9. Calculate the sum of hourly totals and display in browser.
var storeHours   = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', 
                    '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', 
                    '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

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
    return Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers;
}

function getCookieAmount() 
{
    return ((this.randCustPerHour() * this.avgCookiesPerSale));
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
store1.innerHTML = firstAndPike.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          firstAndPike.avgCookiesPerHour()[i]);
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);
}

var store2 = document.getElementById("seatac-airport");
store2.innerHTML = seaTacAirport.storeLoc;
for (var i = 0; i < storeHours.length; i++)
{
    var newEl   = document.createElement('li');
    var newText = document.createTextNode(storeHours[i] + 
                                          seaTacAirport.avgCookiesPerHour()[i]);
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
                                          seattleCenter.avgCookiesPerHour()[i]);
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
                                          capitolHill.avgCookiesPerHour()[i]);
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
                                          alki.avgCookiesPerHour()[i]);
    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[4];
    position.appendChild(newEl);
}