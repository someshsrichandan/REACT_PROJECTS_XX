// src/components/InvestmentSuggestions.js

import React, { useEffect, useState } from 'react';
import { fetchSentimentData } from '../services/apiService';

const InvestmentSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSentimentData = async () => {
      const data = await fetchSentimentData();
      // Simple logic: If there are positive sentiments, suggest "Buy"
      const positiveArticles = data.stories.filter(story => story.sentiment.polarity > 0.5);
      setSuggestions(positiveArticles.length ? ['Buy'] : ['Hold']);
    };

    getSentimentData();
  }, []);

  return (
    <div>
      <h2>Investment Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentSuggestions;
