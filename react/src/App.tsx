import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Cart from './components/Cart'


class App extends React.Component {
  constructor(props:any){
    super(props);
    this.state = {
      products: data.products
    };
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Balloons Inc</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>copyright@BalloonsInc2021</footer>
    </div>
  );
}
}

export default App;
