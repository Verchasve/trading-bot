
require('dotenv').config();

const axios = require('axios');
const API_KEY = process.env.API_KEY;



const getStockData = async() => { 

const stockSymbol = 'IBM'
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=${API_KEY}`

axios.get(apiUrl)
  .then(response => {
    const data = response.data
    
    const dailyData = data['Time Series (Daily)']
    const closingPrices = []
    let i = 0

    for (const date in dailyData) {
    if (i === 30) {
        break
    }
    closingPrices.push(parseFloat(dailyData[date]['4. close']))
    i++
    };
    
    console.log(closingPrices);

  })
  .catch(error => {
    console.log(error)
  });  
};

console.log("Starting check service");
 getStockData();