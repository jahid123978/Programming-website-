import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow style={{ backgroundColor: 'lavender', padding: '10px' }}>
            <MDBCol md="4">
              <h5 className="title">Programming.com</h5>
                <small>3rd floor Road no: 4</small>
              <p>
                 Sector-14, Uttara, Dhaka
              </p>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Learns</h5>
              <ul>
                  <NavLink style={{color: 'black', marginRight: '15px'}} to="/">Algorithms</NavLink>
                <br />
                <NavLink style={{color: 'black', marginLeft: '13px'}} to="/">Data Structures</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '30px'}} to="/">Language</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '20px'}} to="/">CS subjects</NavLink>
                <br />
                <NavLink style={{color: 'black'}} to="/">Video Tutorials</NavLink>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Web Developments</h5>
              <ul>
                  <NavLink style={{color: 'black', marginRight: '100px'}} to="/">Web Tutorials</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '150px'}} to="/">HTML</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '165px'}} to="/">CSS</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '125px'}} to="/">Javascript</NavLink>
                <br />
                <NavLink style={{color: 'black', marginRight: '125px'}} to="/">Bootstrap</NavLink>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3" style={{backgroundColor: 'green', color: 'white'}}>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Programming.com
          </MDBContainer>
        </div>
      </MDBFooter>
    );
};

export default Footer;