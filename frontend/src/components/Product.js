import React from "react"
import { Link } from "react-router-dom"
import { Card, Row, Col, Button } from "react-bootstrap"

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='h2'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Row>
          <Col className='col col-md-6 col-lg-6 col-sm-6 col-xs-6 text-left'>
            <Card.Text as='h3'>${product.price}</Card.Text>
          </Col>
          <Col className='col col-md-6 col-lg-6 col-sm-6 col-xs-6 text-right'>
            <Link to={`/product/${product._id}`}>
              <Button className='btn-custom'>Buy Now</Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Product
