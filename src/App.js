import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { ShoppingCartContext } from './contexts/ShoppingCartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			item
		])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
			<ShoppingCartContext.Provider value={{cart}}>
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</ShoppingCartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
