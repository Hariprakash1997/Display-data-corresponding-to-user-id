import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProduct} from '../Action/Action';

class ProductList extends Component{

    createProductList = () => {
        return this.props.products.map((product, index) => {
            return (<option key={index} value={product.id}>{product.id}</option>)
        })
    }

    getProductList = (event) => {
        console.log("Event : ", event.target.value);
        console.log("Products :", this.props.products[event.target.value - 1]);
        console.log("this.props.selectProduct : ", this.props.selectProduct(this.props.products[event.target.value - 1]));
        return this.props.selectProduct(this.props.products[event.target.value - 1]);
    }

    render(){
        return(
            <select onChange={this.getProductList}>
                <option>Select</option>
                {/* <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option> */}
                {this.createProductList()}
            </select>
        )
    }
}

function mapStateToProps(state){
    console.log("state : ", state)
    return{
        products: state.products
    }
}

function matchDispatchToProps(dispatch){
    console.log("dispatch : ", dispatch);
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);