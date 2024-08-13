import openai from '../openaiClient';
// Fetch cryptocurrency data from CoinCap
export const fetchCryptoData = async () => {
    try {
      const response = await fetch('https://api.coincap.io/v2/assets');
      if (!response.ok) {
        throw new Error('Failed to fetch crypto data');
      }
      const data = await response.json();
      console.log('Crypto Data:', data); // Log the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      throw error;
    }
  };
  
  // Fetch price data for a specific cryptocurrency from CryptoCompare
  export const fetchPriceData = async (coin) => {
    try {
      const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`);
      if (!response.ok) {
        throw new Error('Failed to fetch price data');
      }
      const data = await response.json();
      console.log(`Price Data for ${coin}:`, data); // Log the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching price data:', error);
      throw error;
    }
  };
  
  // Fetch news articles from NewsAPI
  export const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9aa20d5bd4dc4db7a18a25652018e7ff');
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      console.log('News Data:', data); // Log the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  };
  
  // Fetch sentiment data using OpenAI API
  export const fetchSentimentData = async (text) => {
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Analyze the sentiment of the following text: "${text}"`,
        max_tokens: 60,
      });
      console.log('Sentiment Data:', response.data.choices[0].text.trim()); // Log the fetched data
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching sentiment data:', error);
      throw error;
    }
  };