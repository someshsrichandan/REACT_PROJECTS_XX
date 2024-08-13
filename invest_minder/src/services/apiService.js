import axios from 'axios';

export const fetchNews = async () => {
  const response = await axios.get('https://cryptonews-api.com/api/v1/category?section=general&items=10&token=YOUR_API_KEY');
  return response.data;
};

export const fetchPriceData = async (coin) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`);
  return response.data;
};

export const fetchSentimentData = async () => {
  const response = await axios.get('https://api.aylien.com/news/stories?language=en&categories.taxonomy=crypto&sentiment.polarity=positive', {
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
  });
  return response.data;
};
