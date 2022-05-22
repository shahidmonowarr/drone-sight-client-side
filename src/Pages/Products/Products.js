import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);
    const count = products.length;
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
              setProducts(data);
              setLoading(false);
            })
            .catch((error) => Toast.error(error.message));
    }, [])
    return (
      <>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
            <h2 className="text-center text-uppercase mt-5 mb-4 feature">
              LATEST PRODUCTS
            </h2>
            <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
              What We provide to Our Customer!
            </p>
          <Row>
            {products?.map((product) => (
              <Product kay={product._id} product={product} />
            ))}
          </Row>
        </Container>
      )}
    </>
    );
};

export default Products;