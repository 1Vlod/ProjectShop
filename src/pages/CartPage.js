import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"

import ProductCard from "../components/ProductsPage/ProductCard"

import { useSelector } from "react-redux"
import { selectUserCart, selectUserName } from "../features/userCart/userCartSlice"
import { getTotalPrice } from "../features/userCart/selectors"

const CartPage = () => {
  const items = useSelector(selectUserCart)
  const userName = useSelector(selectUserName)
  const state = useSelector(state => state) 

  const renderItems = () => {
    return items.map((item, index) => (
      <Col key={index}>
        <ProductCard product={item[0]} amount={item[1]} cart={true}/>
      </Col>
    ))
  }

  return (
    <Container className="mt-5">
      <h1 className="display-1">{userName}'s Cart</h1>
      <h2 className="display-2">Total price: {getTotalPrice(state)}$</h2>
      <Row>
        {items.length ? renderItems() : <Col><Alert variant="primary">You didn't add products to Cart</Alert></Col>}
      </Row>
    </Container>
  )
}

export default CartPage