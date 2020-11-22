import React from "react"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

const ProductCard = () => {

  return (
    <Card style={{width: "300px"}} className="mt-5">
      <Card.Img variant="top" src="https://via.placeholder.com/300x200" style={{height: "200px"}}/>
      <Card.Body>
        <Card.Title> Product's name</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero sunt reiciendis accusamus quasi alias laborum 
          exercitationem, repudiandae nisi!
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" size="lg">Add to cart</Button>
          <Button variant="secondary" size="lg">Like</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard