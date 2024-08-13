// src/services/apiService.js

export const fetchNews = async () => {
    const response = await fetch('https://cryptonews-api.com/api/v1/category?section=general&items=10&token=YOUR_API_KEY');
    const data = await response.json();
    return data;
  };
  
  export const fetchPriceData = async (coin) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`);
    const data = await response.json();
    return data;
  };
  
  export const fetchSentimentData = async () => {
    const response = await fetch('https://api.aylien.com/news/stories?language=en&categories.taxonomy=crypto&sentiment.polarity=positive', {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });
    const data = await response.json();
    return data;
  };
  