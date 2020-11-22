import React from 'react'

import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

const Menu = () => {

  return (
    <Nav className="flex-column">
      <LinkContainer to="/home" activeStyle={{
        color: "red"
      }}>
        <Nav.Link eventkey="link-1">Link1</Nav.Link>
      </LinkContainer>
      <Nav.Link eventkey="link-2">Link</Nav.Link>
    </Nav>
  )
}

export default Menu