import React, { useState } from 'react'

import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

function Example() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh, fuck fuck fuck</Alert.Heading>
      <p>
        Hello, everybody!
      </p>
    </Alert>
  )
}

const AlertDismissible = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium nesciunt neque illo sapiente vitae.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Please, close me!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert!</Button>}
    </>
  )
}

function FlatBtn() {
  return (
    <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: purple;
          color: white;
        }

        .btn-xxl {
          padding: 1rem 1.5 rem;
          font-size: 1.5rem;
        }
        `}
      </style>

      <Button variant="success" size="xl">
        Flat btn
      </Button>
    </>
  )
}

export { FlatBtn, AlertDismissible, Example }