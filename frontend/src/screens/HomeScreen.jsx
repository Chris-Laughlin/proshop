import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { PRODUCTS_URL } from '../constants.js'; // Import the constant

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products && products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
