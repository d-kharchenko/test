
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const PROD_FETCHED = 'PROD_FETCHED';


export function setProducts(products) {
    return{
        type: SET_PRODUCTS,
        products
    }

}
export function productFetched(product) {
    return {
        type: PROD_FETCHED,
        product
    }
}
export function fetchProduct() {

    return dispatch =>{
        fetch('/api/products')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data.products)));

    }
}
export function fetchProd(id) {
    return dispatch => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => dispatch(productFetched(data.product)));
    }
}