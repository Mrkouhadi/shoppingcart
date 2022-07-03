import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext"
import storeItems from '../data/items.json'
import formatCurrency from "../utils/formatCurrency";
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
                {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize:'.7rem'}}>X{quantity}</span>}
            </div>
            <div className="text-muted" style={{fontSize:'.80rem'}}>
                {formatCurrency(item.price)}
            </div>
        </div>
        <div>
            {formatCurrency(item.price * quantity)}
        </div>
        <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem