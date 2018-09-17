//DONE - 1. Create objects for each location
//DONE - 2. Add minHourlyCustomers
//DONE - 3. Add maxHourlyCustomers
//DONE - 4. Add avgCookiesPerSale
//DONE - 5. Create a randCustPerHour method that generates a random number of cust/hr
//DONE - 6. Calculate the simulated amount of cookies purchased for each hour at each location using avgCookiesPerSale and randCustPerHour
//7. Store results of calculation in an array
//8. Display values of each array as an unordered list in the browser
//9. Calculate the sum of hourly totals and display in browser.
var storeHours   = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];

var firstAndPike = 
{
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65, 
    avgCookiesPerSale : 6.3,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var seaTacAirport = 
{
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerSale : 1.2,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var seattleCenter = 
{
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 3.7,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var capitolHill = 
{
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 2.3,

    randCustPerHour   : getCustPerHour,
    simAmtOfCookies   : getCookieAmount,
    avgCookiesPerHour : getHourlyCookieAverages,
}

var alki = 
{
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
    return ((this.randCustPerHour() * this.avgCookiesPerSale) /                 this.randCustPerHour());
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

console.log(alki.avgCookiesPerHour());