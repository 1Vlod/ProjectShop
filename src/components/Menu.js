import React from 'react'

import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

const Menu = () => {

  return (
    <Nav className="flex-column bg-dark px-2 pt-5 h-100">
      <div className="sticky-top">
        <LinkContainer to="/" exact={true} className="text-light mt-3">
          <Nav.Link className="h2">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/products" className="text-light mt-3" activeClassName="bg-light text-dark rounded-pill">
          <Nav.Link className="h2">Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cart" className="text-light mt-3" activeClassName="bg-light text-dark rounded-pill">
          <Nav.Link className="h2">Cart</Nav.Link>
        </LinkContainer>
      </div>
    </Nav>
  )
}

export default Menu