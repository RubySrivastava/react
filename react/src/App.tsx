import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cart from './components/Cart'

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Balloons Inc</a>
      </header>
      <main>Product List</main>
      <footer>copyright@BalloonsInc2021</footer>
    </div>
  );
}

export default App;
