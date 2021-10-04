import React, { useEffect, useState } from 'react';
import CardSide from '../CardSide/CardSide';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[]);
    return (
        <div>
            <div style={{borderRadius: '1px solid black', backgroundColor: 'blanchedalmond',
           fontFamily: "Times New Roman", padding: '10px', color: 'black'}}>
                <h1>Find your desired courses and Buy it</h1>
                <p> Our Every course leading software engineer, They are working
                     Google, IBM, Oracle, Amazon, Facebook, Netlify, Apple etc.</p>
            </div>
            <div className="card-container">
            {
                courses.map(cours => <CardSide
                key={cours.id}
                cours={cours}></CardSide>)
            }
        </div>
        </div>
    );
};

export default Services;