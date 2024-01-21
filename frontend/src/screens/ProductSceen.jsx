import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating'
import { PROXY } from '../constants.js'; // Import the constant


const ProductSceen = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${PROXY}/api/products/${productId}`);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  return <>
    <Link className="btn btn-light my-3" to="/">Go back</Link>

    <Row>
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price: </Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status: </Col>
                <Col>
                  <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>;
}

export default ProductSceen