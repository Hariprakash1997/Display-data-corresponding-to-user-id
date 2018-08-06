import React from 'react';
import ProductList from '../Container/Product-list';
import ProductDetails from '../Container/Product-detail';

const App = () => {
    return(
        <div>
            <h2>User ID : </h2>
            <ProductList />
            <hr />
            <h2>User Details : </h2>
            <ProductDetails />
        </div>
    )
};

export default App;
