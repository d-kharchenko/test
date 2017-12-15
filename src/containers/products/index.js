import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import SideBar from '../../components/sidebar'

import {fetchProduct} from '../../actions/actionProduct'
import ProductList from './productList';
import NavBar from '../../components/navbar'

class  Products extends Component {
    componentDidMount(){
        this.props.fetchProduct()
    }
    render(){
        return(
            <div className="container">
                <NavBar />
                <SideBar products={this.props.products}/>
                <ProductList products={this.props.products} />
            </div>
        )
    }
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  fetchProduct: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProduct})(Products);