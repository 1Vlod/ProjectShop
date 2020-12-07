import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ProductCard from "../components/ProductsPage/ProductCard"

import { useSelector } from 'react-redux'
import { selectItems } from '../features/items/itemsSlice'

const ProductsPage = () => {
  const items = useSelector(selectItems)

  return (
    <Container className="mt-5">
      <h1 className="display-1">Products</h1>
      <Row>
        {items.map(item => (
          <Col key={item.id}>
            <ProductCard product={item}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductsPage