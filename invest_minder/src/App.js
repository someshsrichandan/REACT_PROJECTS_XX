// src/App.js

import React, { useState } from 'react';
import NewsFeed from './components/NewsFeed';
import PriceChart from './components/PriceChart';
import InvestmentSuggestions from './components/InvestmentSuggestions';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');

  return (
    <div>
      <header>
        <h1>InvestMinder</h1>
        <select onChange={(e) => setSelectedCoin(e.target.value)} value={selectedCoin}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="ripple">Ripple</option>
        </select>
      </header>
      <NewsFeed />
      <PriceChart coin={selectedCoin} />
      <InvestmentSuggestions />
    </div>
  );
};

export default App;
