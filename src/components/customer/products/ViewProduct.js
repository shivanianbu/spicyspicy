import React, { useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../productItem/ProductItem'

function ViewProduct(){
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [viewProduct, setViewProduct] = useState([])

    //  console.log(params)

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setViewProduct(product)
            })
        }
    },[params.id, products])

    if(viewProduct.length === 0) return null;

    return(
        <div>
        <div className="detail">
        <img src={viewProduct.images.url} alt="" />
        <div className="box-detail">
                    <div className="row">
                        <h2>{viewProduct.title}</h2>
                        <h6>#id: {viewProduct.product_id}</h6>
                    </div>
                    <span>$ {viewProduct.price}</span>
                    <p>{viewProduct.description}</p>
                    <p>{viewProduct.content}</p>
                    <p>Sold: {viewProduct.sold}</p>
                    <Link to="/cart" className="cart">
                        Add Cart
                    </Link>
                </div>
        </div>
<div>
<h2>Related Items</h2>
<div className="products">
    {
        products.map(product => {
            return product.category === viewProduct.category 
                ? <ProductItem key={product._id} product={product} /> : null
        })
    }
</div>
</div>
</div>
    )
}
export default ViewProduct