import { useState } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/CartContext'
import storeItems from "../data/items.json"
import  formatCurrency  from "../utils/formatCurrency"
import CartItem from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean
}

const Cart = ({isOpen}:ShoppingCartProps) => {
  const {closeCart, cartItems} = useShoppingCart()
console.log("isOpen: " + isOpen);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto  fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack> 
      </Offcanvas.Body>
    </Offcanvas>
  )
}
export default Cart