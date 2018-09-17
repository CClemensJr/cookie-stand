//DONE - 1. Create objects for each location
//DONE - 2. Add minHourlyCustomers
//DONE - 3. Add maxHourlyCustomers
//4. Add avgCookiesPerSale
//5. Create a randCustPerHour method that generates a random number of cust/hr
//6. Calculate and store the simulated amount of cookies purchased for each hour at each location using avgCookiesPerSale and randCustPerHour
//7. Store results of calculation in an array
//8. Display values of each array as an unordered list in the browser
//9. Calculate the sum of hourly totals and display in browser.
var firstAndPike = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65, 
    avgCookiesPerSale : 6.3,
}

var seaTacAirport = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerSale : 1.2,
}

var seattleCenter = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 3.7,
}

var capitolHill = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerSale : 2.3,
}

var alki = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerSale : 4.6,
}

console.log(firstAndPike.avgCookiesPerSale);