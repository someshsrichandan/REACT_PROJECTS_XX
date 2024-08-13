import React, { useState } from 'react';
import NewsFeed from './components/NewsFeed';
import PriceChart from './components/PriceChart';
// import InvestmentSuggestions from './components/InvestmentSuggestions';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC');

  return (
    <div>
      <header>
        <h1>InvestMinder</h1>
        <select onChange={(e) => setSelectedCoin(e.target.value)} value={selectedCoin}>
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="XRP">Ripple</option>
        </select>
      </header>
      <NewsFeed />
      <PriceChart coin={selectedCoin} />
      {/* <InvestmentSuggestions /> */}
    </div>
  );
};

export default App;
