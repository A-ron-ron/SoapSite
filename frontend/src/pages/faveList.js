import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../components/Rating';
import { listProducts } from '../actions/productActions';

function FaveList(props) {


  const [faveProducts, setFaveProducts] = useState()

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const faves = userInfo.faveList;

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
    }, []);
      
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

    console.log(products)

  function prodList () {
      faves.map(fave => {
        products.map(product => {
          if (fave._id === product._id){
            setFaveProducts(product)
            // console.log(faveProducts)
          }
        })
    })
  } prodList()


  return (
    <>
        <ul className="products">
          <h1>FaveList</h1>
           {faves.map((product) => (
            <li key={product._id}>
              <div className="product">
                <h2>{product.id}</h2>
                 {/*<Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>*/}
              </div>
            </li>
          ))} 
        </ul>
    </>
  );
}
export default FaveList;
