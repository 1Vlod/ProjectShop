import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import ProductCard from "../components/ProductsPage/ProductCard"

import { useSelector, useDispatch } from 'react-redux'
import { foodSelector, fetchFoodItem } from "../features/food/foodSlice"

const FoodPage = () => {
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  const { loading, foodItem } = useSelector(foodSelector)

  const getFoodItem = () => {
    setShow(true)
    dispatch(fetchFoodItem({ query }))
  }


  const renderFoodItem = () => {
    if (loading === "pending") return <div>Loading...</div>

    return (
      <Col>
        <ProductCard
          product={{
            name: foodItem.strMeal,
            img: foodItem.strMealThumb,
            price: foodItem.idMeal.slice(-2),
            id: foodItem.idMeal
          }}
        />
      </Col>
    )
  }

  const renderBtn = () => {
    if (query.length > 0) {
      return (
        <Button
          variant="success"
          onClick={getFoodItem}
          disabled={loading === "pending"}>
          Get food!
        </Button>
      )
    }

    return (
      <Button
        variant="primary"
        onClick={getFoodItem}
        disabled={loading === "pending"}>
        Get random food!
      </Button>
    )
  }

  return (
    <Container className="mt-5">
      <h1 className="display-1">Food Shop</h1>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Food"
            />
          </InputGroup>
        </Col>

        <Col>{renderBtn()}</Col>
      </Row>

      {show && (
        <Row>
          {renderFoodItem()}
        </Row>
      )}
    </Container>
  )
}

export default FoodPage