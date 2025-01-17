import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [cart, setCart] = useLocalStorage('Cart', []);
  const [products] = useState(data);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = idx => {
    // let matchingItems = cart.filter(item => item.id === id);
    // let nonmatchingItems = cart.filter(item => item.id !== id);

    // matchingItems.pop();
    // [...matchingItems, ...nonmatchingItems]
    const updatedCart = [...cart];
    updatedCart.splice(idx, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      {/* Routes */}
      <ProductContext.Provider value={{ products }}>
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
          <Navigation />

          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
