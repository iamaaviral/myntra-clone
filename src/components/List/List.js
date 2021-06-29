import React from 'react';
import Product from '../Product/Product'
import './List.css'
import data from '../../constant'

const List = (props) => {
    return (
        <div className="each-item-wrapper">
            {
                data.products.map((eachItem, i) => {
                    return <Product item={eachItem} key={i} />
                })
            }
        </div>
    )
}

export default List;