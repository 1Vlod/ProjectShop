import React from 'react'

import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

import { useSelector } from "react-redux"
import { selectUserName } from "../features/userCart/userCartSlice" 

const Menu = () => {
  const userName = useSelector(selectUserName)

  return (
    <Nav className="flex-column bg-dark px-2 pt-5 h-100">
      <div className="sticky-top">
        <LinkContainer to="/products" className="text-light mt-3" activeClassName="bg-light text-dark rounded-pill">
          <Nav.Link className="h2">Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/food" className="text-light mt-3" activeClassName="bg-light text-dark rounded-pill">
          <Nav.Link className="h2">Food Shop</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cart" className="text-light mt-3" activeClassName="bg-light text-dark rounded-pill">
          <Nav.Link className="h2">{userName}'s Cart</Nav.Link>
        </LinkContainer>
      </div>
    </Nav>
  )
}

export default Menu