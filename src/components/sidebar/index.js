import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {compose} from 'redux'

const SideBar  = ({products, getCategory}) =>{
    console.log(getCategory)
    const sidebar = (el, index) => {
        return(
            <NavLink
                to={`/products/${el.category}`}
                key={index}
                className="list-group-item list-group-item-action"
                activeClassName='is-active'
            >
                {el.category}</NavLink>
            )
    };

        return(

            <div className="sidebar">
                <ul className="list-group col-md-3">
                    {products.map((el, index) => sidebar(el, index))}
                </ul>

            </div>
        )

};
SideBar.propTypes = {
    products: PropTypes.array.isRequired
};

export default SideBar
