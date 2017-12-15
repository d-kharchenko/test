import React from 'react';
import PropTypes from 'prop-types'
import ProductCard from './productCard'


const ProductList = ({products}) => {

    const emptyMessage = (
        <p>Список порожній</p>
    );

    const productList = (
        <div className="row">
            <div className="container">
                {products.map(product => <ProductCard product={product} key={product._id}/>)}
            </div>
        </div>
    );

    return(
        <div>
            {products.length === 0 ? emptyMessage : productList}
        </div>
    )

}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList