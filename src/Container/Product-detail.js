import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductDetails extends Component{

    render(){
        console.log("Product-details : this.props : ", this.props.product);
        if(!this.props.product){
            return(
                <h1>Select a product....</h1>
            )
        }
        return(
            <div>
                <h1>ID : {this.props.product.id}</h1>
                <h3>Pen : {this.props.product.pen}</h3>
                <h3>Books : {this.props.product.books}</h3>
                <h3>Soap : {this.props.product.soap}</h3>
            </div>
        )
    }

}

function mapStateToProps(state){
    console.log("Product state : ", state);
    return{
        product: state.activeProduct
    }
}

export default connect(mapStateToProps)(ProductDetails);