import React from 'react';
import Navbar from './Navbar';

const Home = () => (
  <div>
    <Navbar />
    <main>
      <h1>Welcome To Our Page</h1>
      <div className="text-container">
        <p>"Welcome to our advanced online calculator! Perform a wide range of mathematical calculations quickly and accurately. 
            Our user-friendly interface supports basic arithmetic operations, percentages, and scientific notation. 
            Simplify your calculations and experience the convenience of our powerful calculator. Start using it today!"
        </p>
      </div>
    </main>
  </div>
);

export default Home;
