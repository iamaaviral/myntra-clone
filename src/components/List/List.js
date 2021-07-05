import React, { useState } from 'react';
import Product from '../Product/Product'
import './List.css'

const List = (props) => {

    const [data, setData] = useState(null)

    React.useEffect(() => {
        console.log('Component Did mount')
        fetch('https://demo7242716.mockable.io/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="each-item-wrapper">
            {
                data ? data.products.map((eachItem, i) => {
                    return <Product item={eachItem} key={i} />
                }) : <h1>Loading......</h1>
            }
        </div>
    )
}














// class List extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: null
//         }
//     }

//     componentDidMount() {
//         fetch('https://demo7242716.mockable.io/products')
//             .then(res => res.json())
//             .then(data => this.setState({
//                 data
//             }))
//     }

//     render() {
//         return (
//             <div className="each-item-wrapper">
//                 {
//                     this.state.data ? this.state.data.products.map((eachItem, i) => {
//                         return <Product item={eachItem} key={i} />
//                     }) : <h1>Loading......</h1>
//                 }
//             </div>
//         )
//     }
// }

export default List;