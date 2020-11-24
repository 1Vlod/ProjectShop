import React from "react"

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LinkContainer } from "react-router-bootstrap"



const Greeting = () => {

  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>
        This is the welcome page. Please write your nick to continue 
        or you can coninue as a "User".
      </p>
      <Row>
        <Col sm={{span: 7, offset: 0}}>
          <InputGroup>
            <FormControl placeholder="User"/>
            <InputGroup.Append>
              <LinkContainer to="/products">
                <Button variant="primary">Continue!</Button>
              </LinkContainer>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default Greeting