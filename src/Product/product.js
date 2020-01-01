import React from 'react'

export default class Product extends React.Component{

    render(){
        console.log(this.props.product)
        return(
            <div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
                <p>{this.props.product.describe}</p>
            </div>
        )
    }
}