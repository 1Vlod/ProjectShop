import React from 'react'

import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

const Menu = () => {

  return (
    <Nav className="flex-column bg-dark px-3 pt-5 h-100 ">
      <div className="sticky-top">
        <LinkContainer to="/" className="text-light mt-3">
          <Nav.Link className="display-4">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/products" className="text-light mt-3">
          <Nav.Link className="display-4">Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cart" className="text-light mt-3">
          <Nav.Link className="display-4">Cart</Nav.Link>
        </LinkContainer>
      </div>
    </Nav>
  )
}

export default Menu