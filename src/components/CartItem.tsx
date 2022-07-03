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
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{width:'130px', height:'75', objectFit:'cover'}}/>
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize:'.7rem'}}>{quantity}X</span>}
            </div>
        </div>
    </Stack>
  )
}

export default CartItem