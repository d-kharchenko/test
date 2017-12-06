import React from 'react';
import {Link} from 'react-router-dom';
import './top-products.css'
const carts = [
    {
        title: '1С: Документообіг КОРП для України',
        price: '9000',
        image: 'images/1c-img.jpg'
    },
    {
        title: '1С: Комплексний облік для бюджетних установ України',
        price: '8500',
        image: 'images/1c-img.jpg'
    },
    {
        title: '1С: Роздріб 8 для України',
        price: '10000',
        image: 'images/1c-img.jpg'
    }
];

const title = (
    carts.map((el, index) =>
        <div className='products-cart' key={index}>
            <img src={el.image} className='products-cart__img' alt={el.title}/>
            <h3 className='products-cart__title'>
                {el.title}
            </h3>
            <p className='products-cart__price'>
                {el.price}  грн.
            </p>
        </div>
    )
);
const TopProducts = () => {
    return(
        <div className='prt-products'>
            <div className='container'>
                <h2 className='prt-products__title'>Продукти 1С</h2>
                <div className='products-wrap'>
                    {title}

                </div>
                <Link
                    to='/products'
                    className='btn-link'
                >
                    <button className="btn btn-danger">
                        Переглянути інші
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default TopProducts;