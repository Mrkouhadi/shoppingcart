import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utils/formatCurrency";

type shopItemProps = {
    name:string,
    id:number,
    price:number,
    imgUrl:string
}

const ShopItem = ({id, name, imgUrl, price}:shopItemProps) => {
    const quantity = 10;

  return (
    <Card className="h-100">
        <Card.Img src={imgUrl} variant="top" height="200px" style={{objectFit:'cover'}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-4">{name}</span>
                <span className="text-muted ms-2">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    quantity === 0 ? (
                        <Button className="bg-success w-100" >Add to Cart</Button>
                    ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                          <div className="d-flex align-items-center justify-content-center " style={{gap:".5rem"}}>
                            <Button>-</Button>
                            <div><span className="fs-3">{quantity}</span> in Cart</div>
                            <Button>+</Button>
                          </div>
                          <Button variant="danger">Remove</Button>
                       </div>
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default ShopItem