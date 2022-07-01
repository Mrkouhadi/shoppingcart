import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/CartContext'

type ShoppingCartProps = {
    isOpen: boolean
}

const Cart = ({isOpen}:ShoppingCartProps) => {
  // const {closeCart} = useShoppingCart()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  )
}
export default Cart