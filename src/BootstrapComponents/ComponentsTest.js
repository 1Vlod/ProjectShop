import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function Test() {
  const [show, setShow] = useState(true)
  return (
    <Container>
        <Row>
          <Col>
          <ToggleButtonGroup>Something</ToggleButtonGroup>
          </Col>
        </Row>
      </Container>
  )
 
}

export default Test
// [
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'warning',
//   'info',
//   'light',
//   'dark',
// ]