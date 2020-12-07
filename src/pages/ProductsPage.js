import React, { useEffect, useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ProductCard from "../components/ProductsPage/ProductCard"

import { useSelector, useDispatch } from 'react-redux'
import { selectItems } from '../features/items/itemsSlice'
import { postsSelector, fetchPosts, fetchPostById } from "../features/posts/postsSlice"
import Button from 'react-bootstrap/esm/Button'

const ProductsPage = () => {
  const [state, setState] = useState(1)
  const dispatch = useDispatch()
  const { loading, posts } = useSelector(postsSelector)

  const items = useSelector(selectItems)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (posts.length === 0) return <p>Loading posts...</p>

    return posts.map(item => {
      return (
        <Col key={item.id} style={{maxWidth: "300px"}}>
          {JSON.stringify(item)}
        </Col>
      )
    })
  }
  return (
    <Container className="mt-5">
      <h1 className="display-1">Products {state}</h1>
      <button onClick={() => setState(state + 1)}>Click me</button>
      <Row>
        {items.map(item => (
          <Col key={item.id}>
            <ProductCard product={item}/>
          </Col>
        ))}
      </Row>
      {/* <Row>
        {renderPosts()}
      </Row> */}
    </Container>
  )
}

export default ProductsPage