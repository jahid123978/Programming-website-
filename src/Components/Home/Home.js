import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap'
import CardSide from '../CardSide/CardSide';
import './Home.css'

const Home = () => {
   const [course, setCourse] = useState([]);
  useEffect(() =>{
     fetch('./fakeDb2.json')
     .then(res => res.json())
     .then(data => setCourse(data))
  }, [])
  
    return (
       <div>
         <div className = "head-text">
            <div className = "head-image">
            <img src ='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt = "Freedom Blog" />
            </div>
               <div class='text-on-image'>
                  <h1>Welcome to programming world</h1>
                  <button className="button">Get Started</button>
                  
              </div>
         </div>
         <div style={{ marginTop: '30px'}}>
            <h1>Programming Leran with us</h1>
         </div>
         <div className="card-container">
            {
               course.map(cours => <CardSide
               key = {cours.id}
               cours = {cours}
               ></CardSide>)
            }
            {/* <CardSide></CardSide> */}
         </div>
         
       </div>
    );
};

export default Home;