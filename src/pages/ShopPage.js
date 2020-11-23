import React from 'react'
import { Switch, Route } from "react-router-dom"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ProductsPage from "./ProductsPage"
import CartPage from "./CartPage"
import Menu from "../components/Menu"

const Shop = () => {

  return (
    <Row>
      <Col md={2}>
        <Menu/>
      </Col>
      <Switch>
        <Route path="/products">
          <ProductsPage/>
        </Route>
        <Route path="/cart">
          <CartPage/>
        </Route>
      </Switch>
    </Row>
  )
}

export default Shop