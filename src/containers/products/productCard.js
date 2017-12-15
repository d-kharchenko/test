import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

export default function ProductCard({product}) {
    return(
        <div className="card col-md-3" >

                <img src={product.image} alt={product.title} className="products-cart__img card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.price} грн.</p>
                    <Link
                        to={`/product/${product._id}`}
                    >
                         <button className="btn btn-primary">Детельніше</button>
                    </Link>
                    <button className="btn btn-success">Придбати</button>
                </div>

        </div>
    )
}
ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};
