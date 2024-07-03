import { Layout } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/CategoryProductStyle.css"

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className='container mt-3'>
        <h4 className='text-center'>Category - {category?.name} </h4>
        <h6 className='text-center'>{products?.length} result found </h6>

        <div className='row'>
        <div className='col-md-9'>
          <div className='d-flex flex-wrap'>
          {products?.map((p) => (
                <div className="card m-2" key={p._id} style={{ width: "18rem"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    
                    <p className="card-text">{p.description.substring(0,30)}...</p>
                    <h2 className="card-text"> ₹ {p.price}</h2>
              
                    <button className='btn btn-primary ms-2'
                     onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                    <button className='btn btn-secondary ms-2'>Add To Cart</button>
                  
                  </div>
                </div>
              
            ))}
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default CategoryProduct
