import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import ProductCard from "../components/ProductsPage/ProductCard"

import { useDispatch } from "react-redux"
import { addItem } from "../features/items/itemsSlice"

import { useForm } from "react-hook-form"


const NewProductPage = () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      img: "https://via.placeholder.com/300x200"
    }
  })

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(addItem(data))
  }

  const watchFields = watch(["name", "price", "descr", "img", "amount"])
  console.log(watchFields)
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   dispatch(addItem({ name, img, price, descr, amount }))
  // }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="product name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                ref={register({ required: "This is required", minLength: 4 })}
                placeholder="Thing"
              />
              {errors.name?.message}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                name="img"
                ref={register({ required: true })}
                placeholder="https://via.placeholder.com/300x200"
              />
              <Form.Text className="text-muted">
                Please, put here URL for your product image.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                ref={register({ required: true })}
                placeholder="0"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="descr"
                ref={register}
                placeholder="Cool thing for riding, writing, coding and something"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Infinite"
              />
              <Form.Control
                name="amount"
                ref={register({ required: true })}
                placeholder={"∞0"}
              />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Col>

        <Col>
          <ProductCard product={watchFields} example />
        </Col>
      </Row>
    </Container>
  )
}

export default NewProductPage