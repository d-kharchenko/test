import React, {Component} from  'react';
import {fetchProd} from '../../actions/actionProduct'
import {connect} from 'react-redux'





class Product extends Component {
        componentDidMount(){
            const {match} = this.props
            if (match.params._id){
                this.props.fetchProd(match.params._id)
            }
        }
    detailsProd(){
        const {products} = this.props;
        return(
            <div className="col-md-8">
                <img
                    src={`../${products.image}`}
                    alt={products.title}
                    className="products-cart__img"
                />
                <h3>{products.price} грн.</h3>
                <h2>{products.title}</h2>
                <p>{products.description}</p>
                <button className="btn btn-success">Придбати</button>
            </div>
        )
    }

    render(){
        const {products} = this.props;
        return(
            <div className="container">{products && this.detailsProd()}</div>
        )
    }
}


function mapStateToProps(state, props){
    const {match} = props;
    if (match.params._id){
        return{
            products: state.products.find(item => item._id === match.params._id)
        }
    }
    return { products: null}
}


export default connect(mapStateToProps, {fetchProd})(Product)