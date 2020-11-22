import React from 'react'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Grid = () => {
  return (
    <>
      <style type="text/css">
        {`
        .blueCol {
          background-color: #bbeffd;
          border: 1px solid #61dafb;
        }
        `}
      </style>
      <Container fluid="md">
        <Row xs={2} md={4} lg={6}>
          <Col className="blueCol">
            <div className="mt-5">Something</div>
            <div className="px-5">Something</div>
          </Col>
          <Col className="blueCol">Lorem ipsum dolor sit amet.</Col>
        </Row>
        <Row>
          <Col className="blueCol" md={{ span: 3 }}>1 of 2</Col>
          <Col className="blueCol" md={{ span: 3, offset: 3 }}>Lorem ipsum dolor sit amet.</Col>
          <Col className="blueCol" md={{ span: 3, offset: 3 }}>1 of 2</Col>
          <Col className="blueCol" md={{ span: 3, offset: 2 }}>1 of 2</Col>
        </Row>
        <Row>
          <Col className="blueCol" xs={6} >1 of 2</Col>
          <Col className="blueCol" xs={6} >Lorem ipsum dolor sit amet.</Col>
        </Row>
      </Container>
    </>
  )
}

export default Grid