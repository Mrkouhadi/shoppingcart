import { Card } from "react-bootstrap"

type shopItemProps = {
    name:string,
    id:number,
    price:number,
    imgUrl:string
}



const ShopItem = ({id, name, imgUrl, price}:shopItemProps) => {
  return (
    <Card>
        <Card.Img src={imgUrl} variant="top" height="200px" style={{objectFit:'cover'}} />
    </Card>
  )
}

export default ShopItem