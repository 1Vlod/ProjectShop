import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ProductCard from "../components/ProductsPage/ProductCard"

const ProductsPage = () => {

  return (
    <Container className="mt-5">
      <h1 className="display-1">Products</h1>
      <Row>
        <Col>
          <ProductCard/>
        </Col>
        <Col>
          <ProductCard/>
        </Col>
        <Col>
          <ProductCard/>
        </Col>
        <Col>
          <ProductCard/>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsPage