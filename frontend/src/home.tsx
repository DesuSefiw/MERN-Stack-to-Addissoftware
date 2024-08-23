import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assets/offcccc.jpg'; // Adjust the path as necessary
import NavHome from "./components/common/Navbar/NavHome";
const Home: React.FC = () => (
  <div>
  
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        
      }}
      
    >
     
      <Routes>
       <Route path="/" element={<NavHome/>}/>
      </Routes>
      <ToastContainer theme="dark"/>
      <h1  style={{textAlign:'center',padding:'50px'}}>Welcome, Software Development at Addis Software </h1>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '10vh' 
    }}>
    <h1><Link to="/songs" style={{
          padding: '10px 20px',
          fontSize: '20px',
          color: 'white',
          backgroundColor: '#007BFF',
          textDecoration: 'none',
          borderRadius: '5px',
          textAlign: 'center', 
        }}>See Songs</Link></h1>
    </div>
     

    
    </div>
    
<div style={{textAlign:"center"}}>
<Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={12} className="home-about-social">
        <h1 style={{color:"black"}}>SOFTWARE DEVELOPMENT IN ETHIOPIA</h1>
        <p style={{color:"black"}}>
          {" "}
          Addis Software PLC is a Software development team in Addis Ababa,
           Ethiopia serving clients nationwide and worldwide. We are extremely committed to delivering quality advice, 
           sales and support to assist our clients to achieve the maximum from their investment. 
           Addis Software PLC was started because we want to contribute our own share by providing opportunities to talented developers. 
           While working on projects that actually can bring a significant change in Ethiopia’s IT sector.
          <br /><br></br>
          <strong>I'M  Desalegn Sefiw . Let us embark on a journey of shared success. I look forward to the chance to collaborate and create something remarkable.</strong>
        </p>
        <SocialMedia />
      </Col>
    </Row>
  </Container>
</Container>
</div>
</div>
);

export default Home;
