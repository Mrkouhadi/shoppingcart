import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext"
import storeItems from '../data/items.json'
type cartItemProps = {
    id:number
    quantity:number
}
const CartItem = ({id, quantity}:cartItemProps) => {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(item => item.id === id);
    if(item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
        <img src={item.imgUrl} style={{width:'130px', height:'75', objectFit:'cover'}}/>
    </Stack>
  )
}

export default CartItem