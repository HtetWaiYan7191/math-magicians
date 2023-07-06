import React, { useEffect, useState } from 'react';
import './Quote.css';
import { ImSpinner10 } from 'react-icons/im';

function Quote() {
  const [data, setData] = useState([{ quote: '', author: '', category: '' }]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const category = 'happiness';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
      const apiKey = 'h4lyJHiRHcwWlzfvQjccBw==vq4qYlL6Iybi4fRC';
      setLoading(true);
      try {
        const api = await fetch(url, {
          headers: {
            'X-Api-Key': apiKey,
          },
          contentType: 'application/json',
        });
        const result = await api.json();
        setData(result[0]);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div className="middle">Something went wrong!</div>;

  if (loading) return <div className="middle"><ImSpinner10 className="rotate" /></div>;
  return (
    <div className="hero">
      <div className="quote-container">
        <div className="quote">{data.quote}</div>
        <span>
          By
          {' '}
          {' '}
          {data.author}
        </span>
      </div>
    </div>

  );
}

export default Quote;
