import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  const para = `Welcome to our advanced online calculator! Perform a wide range of
  mathematical calculations quickly and accurately. Our user-friendly
  interface supports basic arithmetic operations, percentages, and
  scientific notation. Simplify your calculations and experience the
  convenience of our powerful calculator. Start using it today!`;
  const secondPara = ' Here is another paragraph to provide additional information about our calculator. You can trust our reliable calculations for various mathematical tasks. Whether you\'re a student, professional, or simply in need of quick and accurate results, our calculator is here to assist you.';
  const [reload, setReload] = useState('');
  const [rightLoad, setRightLoad] = useState('');

  useEffect(() => {
    setReload('reload');
    setRightLoad('rightLoad');
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h2>Welcome To Our Page</h2>
        <div className="text-container">
          <p className={reload}>{para}</p>
          <p className={`second-para ${rightLoad}`}>{secondPara}</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
