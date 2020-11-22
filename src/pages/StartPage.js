import React from 'react'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Greeting from  "../components/StartPage/Greening"

const StartPage = () => {

  return (
    <Container>
      <Row style={{height: "100vh"}} className="d-flex align-items-center">
        <Col> 
          <Greeting/> 
        </Col>
      </Row>
    </Container>
  )
}

export default StartPage