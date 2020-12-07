import React from 'react'
import { Switch, Route } from "react-router-dom"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import ProductsPage from "./ProductsPage"
import CartPage from "./CartPage"
import Menu from "../components/Menu"
import FoodPage from './FoodPage'

const Shop = () => {

  return (
    <Container fluid className="pl-0" style={{height: "100vh"}}>
      <Row className="h-100">
        <Col md="auto">
          <Menu/>
        </Col>
        <Col>
          <Switch>
            <Route path="/products">
              <ProductsPage/>
            </Route>
            <Route path="/cart">
              <CartPage/>
            </Route>
            <Route path="/food">
              <FoodPage/>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default Shop