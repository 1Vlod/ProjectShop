import React from "react"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from "../../features/userCart/userCartSlice"

const ProductCard = ({ cart, product, amount, example }) => {

  const dispatch = useDispatch()
  const getBtnCart = () => {
    if (cart) {
      return (
        <Button
          variant="danger"
          size="lg"
          onClick={() => dispatch(removeProduct({ id: product.id }))}>
          Remove
        </Button>
      )
    }
    return (
      <Button
        variant="primary"
        size="lg"
        disabled={example}
        onClick={() => dispatch(addProduct({ product }))}>
        Add to Cart
      </Button>
    )
  }

  return (
    <Card style={{ width: "300px" }} className="mt-5">
      <Card.Img variant="top" src={product.img} style={{ height: "200px" }} />
      <Card.Body className="p-3">
        <Card.Title className="m-0">{product.name}</Card.Title>
        {product.descr && (
          <Card.Text>
            {product.descr}
          </Card.Text>
        )}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {product.price || 0}</ListGroup.Item>
        <ListGroup.Item>Amount: {amount || product.amount || "∞"}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-between">
        {getBtnCart()}
      </Card.Body>
    </Card>
  )
}

export default ProductCard