import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'

import ProductCard from "../components/ProductsPage/ProductCard"

import { useSelector, useDispatch } from 'react-redux'
import { foodSelector, fetchFoodItem } from "../features/food/foodSlice"

const FoodPage = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const { loading, foodItems } = useSelector(foodSelector)

  const getFoodItem = () => {
    setShow(true)
    dispatch(fetchFoodItem())
  }


  const renderFoodItem = () => {
    if (loading === "pending") return <div>Loading...</div>

    return (
      <Col>
        <ProductCard
          product={{
            name: foodItems[0].strMeal,
            img: foodItems[0].strMealThumb,
            price: 0
          }}
        />
      </Col>
    )
  }

  return (
    <Container className="mt-5">
      <h1 className="display-1">Food Shop</h1>
      <Button variant="primary" onClick={getFoodItem}>Get random food!</Button>
      {show && (
        <Row>
          {renderFoodItem()}
        </Row>
      )}
    </Container>
  )
}

export default FoodPage