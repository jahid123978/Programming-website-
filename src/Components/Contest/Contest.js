import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Contest.css';

const Contest = () => {
    return (
        <div className="head-text">
            <img style={{width: '100%'}} src="https://optinmonster.com/wp-content/uploads/2019/08/how-to-run-an-online-contest.png" alt="" />
             <div className="contest">
                 <h1>Contest Rewind</h1>
                 <p>Start a Virtual Contest, get well prepared for a ranked match</p>
             </div>
             <div>
             <ListGroup style={{marginBottom: '0px'}}>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%', 
                     fontWeight: 'bold', 
                     color: 'green',
                     backgroundColor: 'linen'}}>Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%', 
                     fontWeight: 'bold', color: 'green',
                     backgroundColor: 'linen'}}>Duration</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%', 
                     fontWeight: 'bold', color: 'green',
                     backgroundColor: 'linen'}}>Platform</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Oct'Month Long Challenge</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>7 days</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Week1 Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>3 hours</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Week2 Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>2 hours</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Week2 Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>2 hours</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Week3 Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>2 hours</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>
                 <ListGroup horizontal>
                     <ListGroup.Item style={{width: '40%'}}>Week4 Contest</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>2 hours</ListGroup.Item>
                     <ListGroup.Item style={{width: '40%'}}>Online</ListGroup.Item>
                 </ListGroup>

</ListGroup>
             </div>
        </div>
    );
};

export default Contest;