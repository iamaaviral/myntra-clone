import React from 'react';
import Product from '../Product/Product'
import './List.css'
// import data from '../../constant'

// const List = () => {
//     return (
//         <div className="each-item-wrapper">
//             {
//                 data.products.map((eachItem, i) => {
//                     return <Product item={eachItem} key={i} />
//                 })
//             }
//         </div>
//     )
// }

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://demo7242716.mockable.io/products')
            .then(res => res.json())
            .then(data => this.setState({
                data
            }))
    }

    render() {
        return (
            <div className="each-item-wrapper">
                {
                    this.state.data ? this.state.data.products.map((eachItem, i) => {
                        return <Product item={eachItem} key={i} />
                    }) : <h1>Loading......</h1>
                }
            </div>
        )
    }
}

export default List;