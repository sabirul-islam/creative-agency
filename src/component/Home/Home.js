import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"> <img style={{height: "30px"}} src={"https://i.ibb.co/WFDZqjK/logo.png"} alt="Logo"/></Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Our Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Our Team</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
          <Button variant="dark px-3">Log In</Button>
          </Form>
          </Navbar>

          <div className="d-flex justify-content-center my-5">
              <div className="col-md-6 pt-3 mx-5">
                <h1 className="font-weight-bolder">Let's Grow Your Brand To The Next Level</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sit molestias sunt, asperiores atque hic magni explicabo sequi ad, temporibus voluptates esse. Vitae cumque nam eaque, accusamus error sapiente non!</p>
                <Button variant="dark px-5">Hire Us</Button>
              </div>

              <div className="col-md-6 pb-5">
                <img className="img-fluid float-right mx-5" src={"https://i.ibb.co/wJ2G1RK/Frame.png"} alt="img"/>
              </div>
          </div>

          <div className="d-flex justify-content-center my-5">
            <img style={{height: "50px"}} className="m-auto" src={"https://i.ibb.co/P50X6c2/slack.png"} alt="slack"/>
            <img style={{height: "50px"}}  className="m-auto" src={"https://i.ibb.co/9b9nzSC/google.png"} alt="google"/>
            <img style={{height: "50px"}}  className="m-auto" src={"https://i.ibb.co/5kFLG0Z/uber.png"} alt="uber"/>
            <img style={{height: "50px"}}  className="m-auto" src={"https://i.ibb.co/rxtthzH/netflix.png"} alt="netflix"/>
            <img style={{height: "50px"}}  className="m-auto" src={"https://i.ibb.co/R6swvM2/airbnb.png"} alt="airbnb"/>
          </div>

        </div>
    );
};

export default Home;