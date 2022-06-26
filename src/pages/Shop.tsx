import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ShopItem from '../components/ShopItem';
import ShopItems from '../data/items.json';

const Shop = () => {
  return (
    <div>
      <h1>STORE</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {ShopItems.map(item =>(
         <Col key={item.id}> <ShopItem {...item} /> </Col>
        ))}
      </Row>
    </div>
  )
}

export default Shop