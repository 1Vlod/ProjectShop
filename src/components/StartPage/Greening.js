import React, { useState } from "react"

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LinkContainer } from "react-router-bootstrap"

import { useDispatch } from "react-redux"
import { changeName } from "../../features/userCart/userCartSlice"



const Greeting = () => {
  const [userName, setUserName] = useState("User")
  const dispatch = useDispatch()

  const onChangee = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }

  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>
        This is the welcome page. Please write your nickname to continue 
        or you can continue as a "User".
      </p>
      <Row>
        <Col sm={{span: 7, offset: 0}}>
          <InputGroup onSubmit={e => e.preventDefault}>
            <FormControl placeholder="User" value={userName} onChange={onChangee} />
            <InputGroup.Append>
              <LinkContainer to="/products">
                <Button variant="primary" onClick={() => dispatch(changeName({ userName }))}>Continue!</Button>
              </LinkContainer>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default Greeting