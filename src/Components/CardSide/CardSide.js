import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const CardSide = (props) => {
    const {img, name, cost, contributor} = props.cours;
    return (
  <div>
    <Card style={{ width: '18rem', height: '100%'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Corse name: {name}</Card.Title>
        <Card.Subtitle>Cost: ${cost}</Card.Subtitle>
        <Card.Body>Contributor: {contributor}</Card.Body>
        <Card.Link style={{border: '1px solid black', backgroundColor: 'green',
        padding: '10px',
        borderRadius: '10px'}}><a style={{textDecoration: 'none', color: 'white'}} href="/">Course Detials</a></Card.Link>
        {/* <Button variant="primary">Buy Now</Button> */}
        <Card.Link style={{border: '1px solid black', backgroundColor: 'green', 
        color: 'white',
        padding: '10px',
        borderRadius: '10px'}}><a style={{textDecoration: 'none', color: 'white'}} href="/">Buy Now</a></Card.Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardSide;