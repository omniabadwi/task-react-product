import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost() {
    const { id, title, category,image } = useParams()
    const [singlePost,setSinglePost] =useState({})
    const fetchSinglePostAPI =async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const finalRes = await res.json()
        setSinglePost(finalRes)        
    }
    useEffect(() => {
            fetchSinglePostAPI()
    },[])
  return (
      <div className="singlePost">
        <img src={singlePost.image}></img>
        <div className="info">

            <h2>{singlePost.title}</h2>
        
            <p>PRICE:{singlePost.price} $</p>
            <button>Add To Cart</button>
            <div className="product">
                <p>Product Details</p>
                <p className='des'>{singlePost.description}</p>
            </div>
        </div>

      </div>
  );
}
