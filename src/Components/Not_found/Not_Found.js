import React from 'react';
import { Link } from 'react-router-dom';
import './Not_found.css';

const Not_Found = () => {
    return (
        <div className="head-text">
           <img src="https://thizkingdom.com/static/images/404_v2.png" alt="" />
           <div className="not-found">
               <Link className="button go-home" to="/home">
               Go Home
               </Link>
           </div>
        </div>
    );
};

export default Not_Found;