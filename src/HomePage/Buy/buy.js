import React from 'react'
import Product from '../../Product/product'

export default class BuyPage extends React.Component{

    getProductList(){
        let dataList=[{
        id:1,
        name:"电饭煲",
        price:"35.5",
        describe:"格力电饭煲"
    },{
        id:2,
        name:"电脑",
        price:"4335.5",
        describe:"方正电脑"
    },{
        id:3,
        name:"小度在家",
        price:"335.5",
        describe:"小度智能音箱"
    }]
    return dataList;
    }
    render(){
        let dataList = this.getProductList();
        return(
            dataList.map((item,i)=>(
                <Product product={item}></Product>
            ))
        )
    }
}