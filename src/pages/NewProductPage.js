import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import ProductCard from "../components/ProductsPage/ProductCard"

import { useDispatch } from "react-redux"
import { addItem } from "../features/items/itemsSlice"


const NewProductPage = () => {
  const [name, setName] = useState("")
  const [img, setImg] = useState("https://via.placeholder.com/300x200")
  const [price, setPrice] = useState(0)
  const [descr, setDescr] = useState("")
  const [amount, setAmount] = useState("0")

  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()

  const handleCheck = (e) => {
    const check = e.target.checked
    setChecked(check)

    if (check) {
      setAmount("∞")
    } else {
      setAmount("0")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addItem({ name, img, price, descr, amount }))
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group controlId="product name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Thing"
                value={name}
                onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                placeholder="https://via.placeholder.com/300x200"
                value={img}
                onChange={e => setImg(e.target.value)}
              />
              <Form.Text className="text-muted">
                Please, put here URL for your product image.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="0"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Cool thing for riding, writing, coding and something"
                value={descr}
                onChange={e => setDescr(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Infinite"
                checked={checked}
                onChange={handleCheck} 
              />
              <Form.Control
                placeholder={checked ? "∞" : "0"}
                disabled={checked}
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>

        <Col>
          <ProductCard product={{ name, img, price, descr, amount }} example/>
        </Col>
      </Row>
    </Container>
  )
}

export default NewProductPage