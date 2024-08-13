import React, { useEffect, useState } from 'react';

const InvestmentSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const newsResponse = await fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=9aa20d5bd4dc4db7a18a25652018e7ff`);
        if (!newsResponse.ok) {
          throw new Error('Failed to fetch news');
        }
        const newsData = await newsResponse.json();
        const headlines = newsData.articles.map(article => article.title).join('. ');

        const sentimentResponse = await fetch(`https://api.textrazor.com/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-textrazor-key': `0dce039e2d8ff203f1f1626e7d685d25bdd6df6601ca97dba4c8554a`,
          },
          body: JSON.stringify({
            text: headlines,
            extractors: 'entities,sentiment',
          }),
        });

        if (!sentimentResponse.ok) {
          throw new Error('Failed to fetch sentiment data');
        }

        const sentimentData = await sentimentResponse.json();
        const sentimentScore = sentimentData.response.sentiment.score;
        let suggestion;

        if (sentimentScore > 0) {
          suggestion = ['Buy', 'Long-term'];
        } else if (sentimentScore < 0) {
          suggestion = ['Sell', 'Short-term'];
        } else {
          suggestion = ['Hold'];
        }

        setSuggestions(suggestion);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchSuggestions();
  }, []);

  if (error) return <div>Error: {error}</div>;

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
